import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Accessibility",
  "Fast Portal is committed to making our platform accessible to all users. Learn about our accessibility features and accommodations for users with disabilities.",
  "accessibility"
);

export default function AccessibilityPage() {
  return (
    <StandardPageLayout
      title="Accessibility"
      description="Fast Portal is committed to making our platform accessible to all users. Learn about our accessibility features and accommodations for users with disabilities."
      activeSlug="accessibility"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Accessibility Commitment
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Accessibility
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Fast Portal is committed to ensuring our platform is accessible to everyone, including users with disabilities. We continuously work to improve accessibility and follow WCAG guidelines.
          </p>
        </div>

        <div className="card-standard">
          <div className="space-y-8 text-sm text-standard">
            <section>
              <h2 className="heading-standard text-xl mb-4">Our Accessibility Commitment</h2>
              <p>
                Fast Portal is dedicated to creating an inclusive digital environment where all users, regardless of ability, can access and use our services effectively. We believe accessibility is not just a feature but a fundamental right.
              </p>
              <p>
                Our commitment extends beyond mere compliance with legal requirements. We actively work to identify and remove barriers, implement universal design principles, and ensure equal access to opportunities and information.
              </p>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="heading-standard text-base mb-2">Universal Design</h3>
                  <p className="mb-2">
                    We design our platform to be usable by all people without need for adaptation or specialized design. Our interface follows consistent patterns and predictable interactions.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Consistent navigation and layout structure</li>
                    <li>• Clear and readable typography with appropriate contrast</li>
                    <li>• Intuitive user interface that requires no specialized knowledge</li>
                    <li>• Keyboard accessibility for all functions</li>
                    <li>• Screen reader compatibility and semantic HTML</li>
                  </ul>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-2">WCAG Compliance</h3>
                  <p className="mb-2">
                    We follow Web Content Accessibility Guidelines (WCAG) 2.1 AA standards to ensure our content is perceivable, operable, understandable, and robust for all users.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Text alternatives for non-text content</li>
                    <li>• Sufficient color contrast and visual design</li>
                    <li>• Full keyboard accessibility and focus indicators</li>
                    <li>• Screen reader compatibility and ARIA labels</li>
                    <li>• Responsive design for all devices and screen sizes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">Accessibility Features</h2>
              <div className="mt-4 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="card-standard p-6">
                    <h3 className="heading-standard text-base mb-3">Visual Accessibility</h3>
                    <p className="mb-3 text-standard text-sm">
                      Our platform includes features to support users with visual impairments, ensuring everyone can access and navigate our content effectively.
                    </p>
                    <ul className="space-y-2 text-standard text-sm">
                      <li>• High contrast color schemes with adjustable text sizes</li>
                      <li>• Screen reader optimization with descriptive alt text</li>
                      <li>• Zoom functionality up to 200% without loss of quality</li>
                      <li>• Clear typography with readable fonts</li>
                      <li>• Focus indicators and skip navigation links</li>
                    </ul>
                  </div>

                  <div className="card-standard p-6">
                    <h3 className="heading-standard text-base mb-3">Motor & Cognitive Accessibility</h3>
                    <p className="mb-3 text-standard text-sm">
                      We accommodate users with motor disabilities and cognitive differences through thoughtful design and flexible interaction options.
                    </p>
                    <ul className="space-y-2 text-standard text-sm">
                      <li>• Full keyboard navigation and control</li>
                      <li>• Clear error messages and instructions</li>
                      <li>• Adjustable timeouts and extended response times</li>
                      <li>• Simple, consistent navigation patterns</li>
                      <li>• Voice control and speech recognition support</li>
                    </ul>
                  </div>

                  <div className="card-standard p-6">
                    <h3 className="heading-standard text-base mb-3">Hearing Accessibility</h3>
                    <p className="mb-3 text-standard text-sm">
                      Users with hearing impairments can access our platform through multiple accommodation features and alternative communication methods.
                    </p>
                    <ul className="space-y-2 text-standard text-sm">
                      <li>• Visual indicators for audio content</li>
                      <li>• Caption and transcript support for video content</li>
                      <li>• Volume control and audio-only options</li>
                      <li>• Compatible with assistive hearing devices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">Assistive Technology Support</h2>
              <p>
                Fast Portal supports various assistive technologies and works seamlessly with screen readers, voice control software, and other accessibility tools.
              </p>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="heading-standard text-base mb-3">Screen Readers</h3>
                  <p className="mb-2 text-standard text-sm">
                    Our platform is optimized for popular screen readers including JAWS, NVDA, and VoiceOver, with proper semantic HTML and ARIA landmarks.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Semantic HTML5 structure with proper headings</li>
                    <li>• ARIA labels and descriptions for interactive elements</li>
                    <li>• Skip navigation links for quick access to main content</li>
                    <li>• Descriptive link text and button labels</li>
                  </ul>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-3">Voice Control</h3>
                  <p className="mb-2 text-standard text-sm">
                    Voice navigation and control features enable hands-free operation of our platform for users with motor disabilities or visual impairments.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Voice commands for navigation and search</li>
                    <li>• Dictation support for form filling and messaging</li>
                    <li>• Text-to-speech and speech recognition integration</li>
                    <li>• Voice feedback and confirmation options</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">Testing & Validation</h2>
              <p>
                We regularly test our platform with accessibility tools and user feedback to ensure we meet and exceed accessibility standards.
              </p>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="heading-standard text-base mb-3">Automated Testing</h3>
                  <p className="mb-2 text-standard text-sm">
                    Our development process includes automated accessibility testing with tools like axe-core and lighthouse accessibility audits.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Regular WCAG compliance audits</li>
                    <li>• Screen reader testing across multiple devices</li>
                    <li>• Keyboard-only navigation testing</li>
                    <li>• Color contrast and visual accessibility validation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-3">User Testing</h3>
                  <p className="mb-2 text-standard text-sm">
                    We conduct regular user testing sessions with people who have disabilities to identify real-world accessibility challenges and improvements.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Testing with various assistive technologies</li>
                    <li>• Feedback from users with diverse disabilities</li>
                    <li>• Real-world scenario testing and validation</li>
                    <li>• Continuous improvement based on user insights</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">Getting Help & Support</h2>
              <p>
                If you encounter accessibility barriers or need accommodations, our support team is here to help you use Fast Portal effectively.
              </p>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="heading-standard text-base mb-3">Accessibility Support</h3>
                  <p className="mb-2 text-standard text-sm">
                    Our dedicated accessibility support team can help with technical support, accommodation requests, and accessibility education.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Accessibility questions and technical support</li>
                    <li>• Accommodation requests and special assistance</li>
                    <li>• Training on accessibility features usage</li>
                    <li>• Feedback and accessibility improvement suggestions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-3">Report Issues</h3>
                  <p className="mb-2 text-standard text-sm">
                    Help us improve accessibility by reporting any barriers or challenges you encounter while using our platform.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Accessibility issue reporting through multiple channels</li>
                    <li>• Barrier identification and documentation</li>
                    <li>• Suggestion for improvements and new features</li>
                    <li>• Collaboration with accessibility community</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">Future Improvements</h2>
              <p>
                We are committed to continuous improvement of our accessibility features and staying current with evolving standards and technologies.
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="heading-standard text-base mb-3">Ongoing Development</h3>
                  <p className="mb-2 text-standard text-sm">
                    Our roadmap includes enhanced accessibility features, improved assistive technology support, and advanced user customization options.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• AI-powered accessibility enhancements</li>
                    <li>• Advanced screen reader compatibility</li>
                    <li>• Personalized accessibility profiles</li>
                    <li>• Real-time accessibility assistance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-3">Community Engagement</h3>
                  <p className="mb-2 text-standard text-sm">
                    We actively engage with accessibility community, contribute to open-source accessibility tools, and share our accessibility practices.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Accessibility guidelines and best practices sharing</li>
                    <li>• Open-source accessibility tool contributions</li>
                    <li>• Partnership with accessibility organizations</li>
                    <li>• Regular accessibility audits and public reporting</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">Contact Information</h2>
              <p>
                For accessibility-related inquiries, support requests, or to report accessibility barriers, please contact our dedicated accessibility team.
              </p>
              <div className="mt-4 space-y-2">
                <div>
                  <h3 className="heading-standard text-base mb-3">Accessibility Team</h3>
                  <p className="mb-2 text-standard text-sm">
                    Our accessibility specialists are available to assist with technical support, accommodation requests, and accessibility education.
                  </p>
                  <p>
                    <strong>Email:</strong> accessibility@fastportal.com<br />
                    <strong>Phone:</strong> +92 310 0570707<br />
                    <strong>Response Time:</strong> Within 24 hours for accessibility inquiries
                  </p>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-3">General Support</h3>
                  <p className="mb-2 text-standard text-sm">
                    For general platform assistance or other accessibility questions, please contact our main support team.
                  </p>
                  <p>
                    <strong>Email:</strong> info@fastportal.com<br />
                    <strong>Phone:</strong> +92 310 0570707<br />
                    <strong>Address:</strong> G-9 Markaz, Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-12 card-standard">
          <p className="text-center text-sm text-standard">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </StandardPageLayout>
  );
}
