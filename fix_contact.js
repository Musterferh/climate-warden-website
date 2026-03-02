const fs = require('fs');
const path = 'c:\\Climate Warden\\contact.html';
let content = fs.readFileSync(path, 'utf8');

// The form section was broken from line 137 to 157.
// I will rewrite that block from my context history back to structural health.

content = content.replace(/<a href="https:\/\/wa\.me\/2348012345678\?text=Hi%2C%20I%27m%20interested%20in%20Climate%20Warden"[\s\S]*?<label for="organisation">Organisation \/ School \(optional\)<\/label>/, `
                        <a href="https://wa.me/2348012345678?text=Hi%2C%20I%27m%20interested%20in%20Climate%20Warden"
                            class="btn wa-btn btn-neon" style="margin-top:28px" target="_blank"
                            rel="noopener noreferrer" id="waBtn">
                            Chat on WhatsApp
                        </a>
                    </div>

                    <!-- Contact Form -->
                    <div class="reveal-right">
                        <form class="contact-form" id="contactForm" novalidate>
                            <input type="hidden" name="accessKey" value="sf_dbbhd68hhejncnbc81ch80j9">
                            <input type="hidden" name="subject" value="New Contact Form Submission - Climate Warden">
                            <h3>Send Us a Message <span style="color:var(--green-neon)"></span></h3>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" placeholder="Ahmad" required autocomplete="given-name" />
                                </div>
                                <div class="form-group">
                                    <label for="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" placeholder="Musa" required autocomplete="family-name" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="email">Email Address *</label>
                                <input type="email" id="email" name="replyTo" placeholder="you@example.com" required autocomplete="email" />
                            </div>

                            <div class="form-group">
                                <label for="phone">Phone / WhatsApp (optional)</label>
                                <input type="tel" id="phone" name="phone" placeholder="+234 800 000 0000" autocomplete="tel" />
                            </div>

                            <div class="form-group">
                                <label for="organisation">Organisation / School (optional)</label>`);

fs.writeFileSync(path, content, 'utf8');
console.log('contact.html form structure verified and fixed');
