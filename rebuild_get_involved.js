const fs = require('fs');

const htmlChunk = `                <!-- ════════════════════════════════════════════════ -->
                <!-- PANEL 1: STUDENTS -->
                <!-- ════════════════════════════════════════════════ -->
                <div class="gi-panel active" id="panel-students" role="tabpanel">
                    <div class="gi-layout">
                        <!-- Info -->
                        <div class="gi-info reveal-left">
                            <span class="chip"> Become a Climate Warden</span>
                            <h3>Students — Your Voice Matters</h3>
                            <p>Whether you're in secondary school or university, Climate Warden has a path for your
                                passion and energy. Pick your area of interest below and apply today.</p>
                            <div class="gi-option">
                                <div class="gi-opt-icon"></div>
                                <div class="gi-opt-body">
                                    <h4>Join a Sustainability Club</h4>
                                    <p>Lead environmental action directly in your school — waste management, tree
                                        planting, and more.</p>
                                </div>
                            </div>
                            <div class="gi-option">
                                <div class="gi-opt-icon"></div>
                                <div class="gi-opt-body">
                                    <h4>Volunteer</h4>
                                    <p>Lend your skills to our community campaigns and tree-planting drives across
                                        Bauchi State.</p>
                                </div>
                            </div>
                            <div class="gi-option">
                                <div class="gi-opt-icon"></div>
                                <div class="gi-opt-body">
                                    <h4>Apply for Leadership Training</h4>
                                    <p>Gain the advocacy and project management skills needed to lead your own climate
                                        initiatives.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Form -->
                        <div class="gi-form-card reveal-right">
                            <h4> Student Application Form</h4>
                            <form id="form-student" novalidate>
                                <input type="hidden" name="accessKey" value="sf_dbbhd68hhejncnbc81ch80j9">
                                <input type="hidden" name="subject" value="New Student Application - Climate Warden">
                                <div class="form-row">
                                    <div class="form-group">
                                        <label>Full Name <span class="req">*</span></label>
                                        <input type="text" name="full_name" placeholder="e.g. Amina Yusuf" required />
                                    </div>
                                    <div class="form-group">
                                        <label>Age <span class="req">*</span></label>
                                        <input type="number" name="age" placeholder="e.g. 17" min="10" max="35"
                                            required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>School Name <span class="req">*</span></label>
                                    <input type="text" name="school_name"
                                        placeholder="e.g. Government Secondary School, Bauchi" required />
                                </div>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label>Class / Grade <span class="req">*</span></label>
                                        <select name="class_grade" required>
                                            <option value="">Select class</option>
                                            <option>JSS 1</option>
                                            <option>JSS 2</option>
                                            <option>JSS 3</option>
                                            <option>SS 1</option>
                                            <option>SS 2</option>
                                            <option>SS 3</option>
                                            <option>100 Level</option>
                                            <option>200 Level</option>
                                            <option>300 Level</option>
                                            <option>400 Level</option>
                                            <option>500 Level</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>State / LGA <span class="req">*</span></label>
                                        <input type="text" name="state_lga" placeholder="e.g. Bauchi LGA, Bauchi State"
                                            required />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label>Phone Number</label>
                                        <input type="tel" name="phone" placeholder="e.g. 0812 345 6789" />
                                    </div>
                                    <div class="form-group">
                                        <label>Email Address</label>
                                        <input type="email" name="replyTo" placeholder="e.g. amina@mail.com" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>How would you like to get involved? <span class="req">*</span></label>
                                    <select name="interest" required>
                                        <option value="">Select your interest</option>
                                        <option value="Join a Sustainability Club"> Join a Sustainability Club
                                        </option>
                                        <option value="Volunteer for Campaigns"> Volunteer for Campaigns &amp; Events
                                        </option>
                                        <option value="Apply for Leadership Training"> Apply for Leadership Training
                                        </option>
                                        <option value="All of the above"> All of the above</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Why do you want to join? <span class="req">*</span></label>
                                    <textarea name="motivation"
                                        placeholder="Tell us what motivates you and what you hope to achieve as a Climate Warden..."
                                        required></textarea>
                                </div>
                                <button type="submit" class="form-submit" id="btn-student">Submit Application →</button>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- ════════════════════════════════════════════════ -->
                <!-- PANEL 2: SCHOOLS -->
                <!-- ════════════════════════════════════════════════ -->
                <div class="gi-panel" id="panel-schools" role="tabpanel">
                    <div class="gi-layout">
                        <!-- Info -->
                        <div class="gi-info reveal-left">
                            <span class="chip"> Partner With Us</span>
                            <h3>Schools — Bring Climate Education Home</h3>
                            <p>We partner with secondary schools to integrate a world-class climate curriculum,
                                establish student-led Sustainability Clubs and run impactful workshops. Partnership is
                                <strong style="color:var(--green-neon)">free for all public schools.</strong>
                            </p>
                            <div class="gi-option">
                                <div class="gi-opt-icon"></div>
                                <div class="gi-opt-body">
                                    <h4>Invite Climate Warden</h4>
                                    <p>Request a visit from our trained facilitators for an engaging climate education
                                        workshop tailored to your students.</p>
                                </div>
                            </div>
                            <div class="gi-option">
                                <div class="gi-opt-icon"></div>
                                <div class="gi-opt-body">
                                    <h4>Establish a Sustainability Club</h4>
                                    <p>Work with us to set up a permanent, student-led Sustainability Club at your
                                        institution — complete with funding and mentorship.</p>
                                </div>
                            </div>
                            <div class="gi-option">
                                <div class="gi-opt-icon"></div>
                                <div class="gi-opt-body">
                                    <h4>Simple MOU Process</h4>
                                    <p>A simple Memorandum of Understanding formalises the relationship at no cost to
                                        your school.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Form -->
                        <div class="gi-form-card reveal-right">
                            <h4> School Partnership Request</h4>
                            <form id="form-school" novalidate>
                                <input type="hidden" name="accessKey" value="sf_dbbhd68hhejncnbc81ch80j9">
                                <input type="hidden" name="subject" value="New School Partnership Request - Climate Warden">
                                <div class="form-group">
                                    <label>School Name <span class="req">*</span></label>
                                    <input type="text" name="school_name"
                                        placeholder="e.g. Government Day Secondary School, Bauchi" required />
                                </div>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label>School Type <span class="req">*</span></label>
                                        <select name="school_type" required>
                                            <option value="">Select</option>
                                            <option>Public / Government</option>
                                            <option>Private</option>
                                            <option>Mission / Faith-based</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Principal's Name <span class="req">*</span></label>
                                        <input type="text" name="principal_name" placeholder="Full name" required />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label>Contact Person Name <span class="req">*</span></label>
                                        <input type="text" name="contact_name" placeholder="Who are we speaking with?"
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <label>Their Role <span class="req">*</span></label>
                                        <input type="text" name="contact_role"
                                            placeholder="e.g. Vice Principal, Teacher" required />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label>Phone Number <span class="req">*</span></label>
                                        <input type="tel" name="phone" placeholder="e.g. 0812 345 6789" required />
                                    </div>
                                    <div class="form-group">
                                        <label>Email Address <span class="req">*</span></label>
                                        <input type="email" name="replyTo" placeholder="school@example.com" required />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label>LGA <span class="req">*</span></label>
                                        <input type="text" name="lga" placeholder="e.g. Bauchi LGA" required />
                                    </div>
                                    <div class="form-group">
                                        <label>State <span class="req">*</span></label>
                                        <input type="text" name="state" placeholder="e.g. Bauchi State" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>What are you requesting? <span class="req">*</span></label>
                                    <select name="request_type" required>
                                        <option value="">Select request</option>
                                        <option value="Climate Education Workshop"> Climate Education Workshop Visit
                                        </option>
                                        <option value="Establish Sustainability Club"> Establish a Sustainability Club
                                        </option>
                                        <option value="Both Workshop and Club"> Both — Workshop &amp; Sustainability
                                            Club</option>
                                        <option value="Full Partnership MOU"> Full Partnership (MOU)</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Additional Message</label>
                                    <textarea name="message"
                                        placeholder="Tell us more about your school, number of students, or any specific needs..."></textarea>
                                </div>
                                <button type="submit" class="form-submit" id="btn-school">Request Partnership →</button>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- ════════════════════════════════════════════════ -->
                <!-- PANEL 3: PARTNERS & NGOs -->
                <!-- ════════════════════════════════════════════════ -->
                <div class="gi-panel" id="panel-partners" role="tabpanel">
                    <div class="gi-layout">
                        <!-- Info -->
                        <div class="gi-info reveal-left">
                            <span class="chip"> Drive Change Together</span>
                            <h3>Partners &amp; NGOs — Amplify Our Impact</h3>
                            <p>We welcome strategic collaborations with NGOs, government agencies, research institutions
                                and international organisations. Together we can scale youth climate action across
                                Northern Nigeria and beyond.</p>
                            <div class="gi-option">
                                <div class="gi-opt-icon"></div>
                                <div class="gi-opt-body">
                                    <h4>Collaboration</h4>
                                    <p>Jointly implement regional environmental projects — co-designing programs,
                                        sharing knowledge, and expanding reach across Northern Nigeria.</p>
                                </div>
                            </div>
                            <div class="gi-option">
                                <div class="gi-opt-icon"></div>
                                <div class="gi-opt-body">
                                    <h4>Sponsorship</h4>
                                    <p>Support our school programs or community campaigns to scale our impact. We offer
                                        full transparency with co-branded reporting for every tier.</p>
                                </div>
                            </div>
                            <div class="gi-option">
                                <div class="gi-opt-icon"></div>
                                <div class="gi-opt-body">
                                    <h4>Research &amp; Data</h4>
                                    <p>Partner with us on joint research, impact assessments, or policy advocacy towards
                                        integrating climate education curricula formally.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Form -->
                        <div class="gi-form-card reveal-right">
                            <h4> Propose a Partnership</h4>
                            <form id="form-partner" novalidate>
                                <input type="hidden" name="accessKey" value="sf_dbbhd68hhejncnbc81ch80j9">
                                <input type="hidden" name="subject" value="New Partner/NGO Proposal - Climate Warden">
                                <div class="form-group">
                                    <label>Organisation Name <span class="req">*</span></label>
                                    <input type="text" name="org_name" placeholder="e.g. Green Future Foundation"
                                        required />
                                </div>
                                <div class="form-group">
                                    <label>Organisation Type <span class="req">*</span></label>
                                    <select name="org_type" required>
                                        <option value="">Select type</option>
                                        <option>Local NGO / CBO</option>
                                        <option>International NGO / INGO</option>
                                        <option>Government Agency</option>
                                        <option>University / Research Institution</option>
                                        <option>Corporate / Private Sector</option>
                                        <option>Donor / Foundation</option>
                                        <option>Media / Communications</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label>Contact Person Name <span class="req">*</span></label>
                                        <input type="text" name="contact_name" placeholder="Full name" required />
                                    </div>
                                    <div class="form-group">
                                        <label>Title / Role <span class="req">*</span></label>
                                        <input type="text" name="contact_role" placeholder="e.g. Programs Director"
                                            required />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label>Email Address <span class="req">*</span></label>
                                        <input type="email" name="replyTo" placeholder="contact@org.com" required />
                                    </div>
                                    <div class="form-group">
                                        <label>Phone Number</label>
                                        <input type="tel" name="phone" placeholder="Optional" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Website / LinkedIn</label>
                                    <input type="url" name="website" placeholder="https://your-org.com (optional)" />
                                </div>
                                <div class="form-group">
                                    <label>Type of Collaboration <span class="req">*</span></label>
                                    <select name="collaboration_type" required>
                                        <option value="">Select type</option>
                                        <option value="Joint Projects"> Joint Regional Projects</option>
                                        <option value="Sponsorship"> Sponsorship of Programs / Campaigns</option>
                                        <option value="Research Partnership"> Research &amp; Policy Advocacy</option>
                                        <option value="Capacity Building"> Capacity Building / Training</option>
                                        <option value="Multiple"> Multiple types — describe below</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Describe your collaboration idea <span class="req">*</span></label>
                                    <textarea name="description" style="min-height:120px"
                                        placeholder="Tell us about your organisation's goals, what you'd like to achieve together, and any specific programs or communities you'd like to focus on..."
                                        required></textarea>
                                </div>
                                <button type="submit" class="form-submit" id="btn-partner">Submit Proposal →</button>
                            </form>
                        </div>
                    </div>
                </div>`;

const path = 'c:\\Climate Warden\\get-involved.html';
let content = fs.readFileSync(path, 'utf8');

// Replace everything between <!-- PANEL 1: STUDENTS --> and <!-- CTA -->
content = content.replace(/<!-- ════════════════════════════════════════════════ -->\s*<!-- PANEL 1: STUDENTS -->[\s\S]*?(?=<!-- CTA -->)/, htmlChunk + '\n\n            </div>\n        </section>\n\n        ');

fs.writeFileSync(path, content, 'utf8');
console.log('Restored panels');
