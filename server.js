/**
 * Climate Warden — Backend Server
 * Handles form submissions for Students, Schools, and Partners & NGOs.
 * Data is stored in a local SQLite database (data/submissions.db).
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const Database = require('better-sqlite3');
const fs = require('fs');

/* ── Setup ─────────────────────────────────────────────── */
const app = express();
const PORT = 3000;

// Ensure data/ directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

// Open / create SQLite database
const db = new Database(path.join(dataDir, 'submissions.db'));

/* ── Create Tables ─────────────────────────────────────── */
db.exec(`
  CREATE TABLE IF NOT EXISTS student_applications (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name     TEXT NOT NULL,
    age           INTEGER NOT NULL,
    school_name   TEXT NOT NULL,
    class_grade   TEXT NOT NULL,
    state_lga     TEXT NOT NULL,
    phone         TEXT,
    email         TEXT,
    interest      TEXT NOT NULL,
    motivation    TEXT NOT NULL,
    submitted_at  TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS school_partnerships (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    school_name     TEXT NOT NULL,
    school_type     TEXT NOT NULL,
    principal_name  TEXT NOT NULL,
    contact_name    TEXT NOT NULL,
    contact_role    TEXT NOT NULL,
    phone           TEXT NOT NULL,
    email           TEXT NOT NULL,
    lga             TEXT NOT NULL,
    state           TEXT NOT NULL,
    request_type    TEXT NOT NULL,
    message         TEXT,
    submitted_at    TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS partner_proposals (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    org_name            TEXT NOT NULL,
    org_type            TEXT NOT NULL,
    contact_name        TEXT NOT NULL,
    contact_role        TEXT NOT NULL,
    email               TEXT NOT NULL,
    phone               TEXT,
    website             TEXT,
    collaboration_type  TEXT NOT NULL,
    description         TEXT NOT NULL,
    submitted_at        TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

/* ── Middleware ─────────────────────────────────────────── */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static HTML/CSS/JS files

/* ── Helper ─────────────────────────────────────────────── */
function validate(body, fields) {
    const missing = fields.filter(f => !body[f] || String(body[f]).trim() === '');
    return missing;
}

/* ── Routes: Student Application ───────────────────────── */
app.post('/api/student', (req, res) => {
    const required = ['full_name', 'age', 'school_name', 'class_grade', 'state_lga', 'interest', 'motivation'];
    const missing = validate(req.body, required);
    if (missing.length) return res.status(400).json({ ok: false, error: `Missing fields: ${missing.join(', ')}` });

    const stmt = db.prepare(`
    INSERT INTO student_applications
      (full_name, age, school_name, class_grade, state_lga, phone, email, interest, motivation)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
    const result = stmt.run(
        req.body.full_name.trim(),
        Number(req.body.age),
        req.body.school_name.trim(),
        req.body.class_grade.trim(),
        req.body.state_lga.trim(),
        (req.body.phone || '').trim(),
        (req.body.email || '').trim(),
        req.body.interest,
        req.body.motivation.trim()
    );
    res.json({ ok: true, id: result.lastInsertRowid, message: 'Application submitted! We will contact you soon.' });
});

/* ── Routes: School Partnership ────────────────────────── */
app.post('/api/school', (req, res) => {
    const required = ['school_name', 'school_type', 'principal_name', 'contact_name', 'contact_role', 'phone', 'email', 'lga', 'state', 'request_type'];
    const missing = validate(req.body, required);
    if (missing.length) return res.status(400).json({ ok: false, error: `Missing fields: ${missing.join(', ')}` });

    const stmt = db.prepare(`
    INSERT INTO school_partnerships
      (school_name, school_type, principal_name, contact_name, contact_role, phone, email, lga, state, request_type, message)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
    const result = stmt.run(
        req.body.school_name.trim(),
        req.body.school_type,
        req.body.principal_name.trim(),
        req.body.contact_name.trim(),
        req.body.contact_role.trim(),
        req.body.phone.trim(),
        req.body.email.trim(),
        req.body.lga.trim(),
        req.body.state.trim(),
        req.body.request_type,
        (req.body.message || '').trim()
    );
    res.json({ ok: true, id: result.lastInsertRowid, message: 'Partnership request received! Our team will reach out within 3 business days.' });
});

/* ── Routes: Partner/NGO Proposal ──────────────────────── */
app.post('/api/partner', (req, res) => {
    const required = ['org_name', 'org_type', 'contact_name', 'contact_role', 'email', 'collaboration_type', 'description'];
    const missing = validate(req.body, required);
    if (missing.length) return res.status(400).json({ ok: false, error: `Missing fields: ${missing.join(', ')}` });

    const stmt = db.prepare(`
    INSERT INTO partner_proposals
      (org_name, org_type, contact_name, contact_role, email, phone, website, collaboration_type, description)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
    const result = stmt.run(
        req.body.org_name.trim(),
        req.body.org_type,
        req.body.contact_name.trim(),
        req.body.contact_role.trim(),
        req.body.email.trim(),
        (req.body.phone || '').trim(),
        (req.body.website || '').trim(),
        req.body.collaboration_type,
        req.body.description.trim()
    );
    res.json({ ok: true, id: result.lastInsertRowid, message: 'Proposal received! Our partnerships team will respond within 48 hours.' });
});

/* ── Admin: View Submissions (simple read endpoints) ───── */
app.get('/api/admin/students', (_req, res) => res.json(db.prepare('SELECT * FROM student_applications ORDER BY submitted_at DESC').all()));
app.get('/api/admin/schools', (_req, res) => res.json(db.prepare('SELECT * FROM school_partnerships ORDER BY submitted_at DESC').all()));
app.get('/api/admin/partners', (_req, res) => res.json(db.prepare('SELECT * FROM partner_proposals ORDER BY submitted_at DESC').all()));

/* ── Dashboard summary ─────────────────────────────────── */
app.get('/api/admin/summary', (_req, res) => {
    res.json({
        students: db.prepare('SELECT COUNT(*) as count FROM student_applications').get().count,
        schools: db.prepare('SELECT COUNT(*) as count FROM school_partnerships').get().count,
        partners: db.prepare('SELECT COUNT(*) as count FROM partner_proposals').get().count,
    });
});

/* ── Start ─────────────────────────────────────────────── */
app.listen(PORT, () => {
    console.log(`\n Climate Warden server running at http://localhost:${PORT}`);
    console.log(` Admin endpoints:`);
    console.log(`   GET /api/admin/summary`);
    console.log(`   GET /api/admin/students`);
    console.log(`   GET /api/admin/schools`);
    console.log(`   GET /api/admin/partners\n`);
});
