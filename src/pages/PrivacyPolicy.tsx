import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-[#f9f7f1] dark:bg-[#0B0F19] min-h-screen font-sans pt-32 pb-20 space-y-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionTitle
                    title="Privacy Policy"
                    subtitle="Effective Date: 7 August 2026 | Last Updated: 7 August 2026"
                />

                <div className="bg-[#f5f0e6] dark:bg-slate-900/60 p-8 md:p-12 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 space-y-8">
                    <p className="text-base leading-relaxed">
                        Welcome to German Language Studio ("we", "our", "us"). We value your privacy and are committed to protecting your personal data in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable laws of India.
                        By accessing our website or submitting your information, you consent to the collection, use and processing of your personal data as described in this Privacy Policy.
                    </p>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">1. Who We Are</h3>
                        <p className="leading-relaxed">
                            German Language Studio is an educational institution providing:<br />
                            - German Language Training<br />
                            - Study Abroad Counselling<br />
                            - University Admissions Guidance<br />
                            - Test Preparation<br />
                            - Career Guidance<br />
                            - Visa Support Services<br />
                        </p>
                        <p className="leading-relaxed">
                            For all matters relating to your personal data, German Language Studio acts as the Data Fiduciary under the DPDP Act.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">2. Information We Collect</h3>
                        <p className="leading-relaxed font-semibold">Personal Information</p>
                        <ul className="list-disc pl-5 leading-relaxed space-y-1">
                            <li>Full Name</li>
                            <li>Mobile Number</li>
                            <li>Email Address</li>
                            <li>Date of Birth</li>
                            <li>City and Country</li>
                            <li>Academic Qualification</li>
                            <li>Educational Documents</li>
                            <li>Passport Details (only when required)</li>
                            <li>Visa-related documents</li>
                            <li>Resume/CV</li>
                            <li>Parent/Guardian details (where applicable)</li>
                        </ul>
                        <p className="leading-relaxed font-semibold pt-3">Technical Information</p>
                        <p className="leading-relaxed">When you visit our website, we may automatically collect:</p>
                        <ul className="list-disc pl-5 leading-relaxed space-y-1">
                            <li>IP Address</li>
                            <li>Browser Type</li>
                            <li>Device Information</li>
                            <li>Operating System</li>
                            <li>Website Usage Analytics</li>
                            <li>Cookies and similar technologies</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">3. Purpose of Collecting Personal Data</h3>
                        <p className="leading-relaxed">We process your personal information only for lawful purposes including:</p>
                        <ul className="list-disc pl-5 leading-relaxed space-y-1">
                            <li>Responding to enquiries</li>
                            <li>Counselling students</li>
                            <li>Course registration</li>
                            <li>Admissions support</li>
                            <li>Visa assistance</li>
                            <li>University application processing</li>
                            <li>Language assessment</li>
                            <li>Student communication</li>
                            <li>Fee collection</li>
                            <li>Customer support</li>
                            <li>Sending important updates</li>
                            <li>Marketing communications (only with your consent)</li>
                            <li>Compliance with applicable laws</li>
                        </ul>
                        <p className="leading-relaxed">We collect only the personal data necessary for these purposes.</p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">4. Legal Basis of Processing</h3>
                        <p className="leading-relaxed">Your personal data is processed:</p>
                        <ul className="list-disc pl-5 leading-relaxed space-y-1">
                            <li>With your consent</li>
                            <li>For fulfilling your request</li>
                            <li>For performing services requested by you</li>
                            <li>For compliance with legal obligations</li>
                            <li>For legitimate educational and administrative purposes permitted under applicable law</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">5. Consent</h3>
                        <p className="leading-relaxed">
                            Whenever required, we obtain your consent before collecting your personal data.
                            You may withdraw your consent at any time by contacting us.
                            Withdrawal of consent shall not affect processing already undertaken prior to such withdrawal where permitted by law.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">6. How We Use Your Information</h3>
                        <p className="leading-relaxed">We may use your information to:</p>
                        <ul className="list-disc pl-5 leading-relaxed space-y-1">
                            <li>Contact you regarding courses</li>
                            <li>Schedule counselling sessions</li>
                            <li>Process university applications</li>
                            <li>Coordinate visa documentation</li>
                            <li>Provide language learning services</li>
                            <li>Improve our website</li>
                            <li>Conduct analytics</li>
                            <li>Respond to support requests</li>
                            <li>Send newsletters (only if opted in)</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">7. Sharing of Personal Information</h3>
                        <p className="leading-relaxed">
                            We do not sell your personal information. Your information may be shared only with:
                        </p>
                        <ul className="list-disc pl-5 leading-relaxed space-y-1">
                            <li>Universities</li>
                            <li>Educational institutions</li>
                            <li>German language examination bodies</li>
                            <li>Visa consultants</li>
                            <li>Embassies (where necessary)</li>
                            <li>Government authorities (when legally required)</li>
                            <li>Technology service providers working on our behalf under confidentiality obligations</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">8. International Transfer of Data</h3>
                        <p className="leading-relaxed">
                            As part of overseas education services, your information may be shared with universities or institutions outside India where necessary for admission, visa or educational services.
                            Such transfers shall be undertaken in accordance with applicable law.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">9. Data Retention</h3>
                        <p className="leading-relaxed">We retain personal data only for as long as necessary to:</p>
                        <ul className="list-disc pl-5 leading-relaxed space-y-1">
                            <li>Deliver our services</li>
                            <li>Fulfil legal obligations</li>
                            <li>Resolve disputes</li>
                            <li>Maintain educational records</li>
                        </ul>
                        <p className="leading-relaxed">When no longer required, personal data is securely deleted or anonymised.</p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">10. Data Security</h3>
                        <p className="leading-relaxed">We implement appropriate technical and organisational safeguards including:</p>
                        <ul className="list-disc pl-5 leading-relaxed space-y-1">
                            <li>Secure servers</li>
                            <li>Access controls</li>
                            <li>Encryption where appropriate</li>
                            <li>Password-protected systems</li>
                            <li>Periodic security reviews</li>
                        </ul>
                        <p className="leading-relaxed">While we strive to protect your data, no method of electronic transmission or storage is completely secure.</p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">11. Cookies</h3>
                        <p className="leading-relaxed">Our website may use cookies for:</p>
                        <ul className="list-disc pl-5 leading-relaxed space-y-1">
                            <li>Website functionality</li>
                            <li>Analytics</li>
                            <li>Performance improvement</li>
                            <li>User preferences</li>
                        </ul>
                        <p className="leading-relaxed">You may disable cookies through your browser settings, although certain features may not function properly.</p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">12. Your Rights under the DPDP Act</h3>
                        <p className="leading-relaxed">Subject to applicable law, you have the right to:</p>
                        <ul className="list-disc pl-5 leading-relaxed space-y-1">
                            <li>Access information about your personal data</li>
                            <li>Correct inaccurate or incomplete personal data</li>
                            <li>Update your personal information</li>
                            <li>Withdraw consent</li>
                            <li>Request erasure of your personal data where legally permissible</li>
                            <li>Seek grievance redressal</li>
                            <li>Nominate another person to exercise your rights in specified circumstances</li>
                        </ul>
                        <p className="leading-relaxed">Requests will be handled within timelines prescribed under applicable law.</p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">13. Grievance Redressal</h3>
                        <p className="leading-relaxed">
                            If you have any concerns regarding your personal data or wish to exercise your rights, please contact:
                        </p>
                        <div className="bg-white/50 dark:bg-slate-800 p-4 rounded-xl mt-3">
                            <p className="font-bold">Grievance Officer</p>
                            <p>German Language Studio</p>
                            <p>Email: <a href="mailto:director@germanlanguagestudio.com" className="text-[#BD181E] hover:underline">director@germanlanguagestudio.com</a></p>
                            <p>Phone: +91-9318397686</p>
                        </div>
                        <p className="leading-relaxed pt-2">If your grievance is not satisfactorily resolved, you may approach the appropriate authority under applicable law.</p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">14. Children's Privacy</h3>
                        <p className="leading-relaxed">
                            Where our services are provided to minors, consent from a parent or lawful guardian will be obtained wherever required under applicable law.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">15. Third-Party Links</h3>
                        <p className="leading-relaxed">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external websites.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">16. Changes to this Privacy Policy</h3>
                        <p className="leading-relaxed">
                            We may update this Privacy Policy from time to time. The revised version will be published on this page with the updated effective date. Continued use of our website after such updates constitutes acceptance of the revised Privacy Policy.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">17. Contact Us</h3>
                        <div className="bg-white/50 dark:bg-slate-800 p-4 rounded-xl">
                            <p className="font-bold">German Language Studio</p>
                            <p>Website: <a href="https://germanlanguagestudio.in" className="text-[#BD181E] hover:underline">https://germanlanguagestudio.in</a></p>
                            <p>Email: <a href="mailto:info@germanlanguagestudio.com" className="text-[#BD181E] hover:underline">info@germanlanguagestudio.com</a></p>
                            <p>Phone: +91-9318397686</p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};
