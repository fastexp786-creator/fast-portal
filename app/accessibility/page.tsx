import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility | Fast Job Career",
  description: "Fast Job Career's accessibility features and commitment to inclusive design. Learn about our accessibility options and WCAG compliance.",
  keywords: "accessibility, WCAG compliance, inclusive design, disability access, screen reader support",
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Accessibility
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast Job Career is committed to making our platform accessible to everyone, 
            including people with disabilities. Learn about our accessibility features and options.
          </p>
        </div>

        {/* Accessibility Statement */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">♿</span>
            </div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Our Commitment to Accessibility
            </h2>
            <p className="text-blue-800 text-lg max-w-2xl mx-auto">
              Fast Job Career is dedicated to ensuring digital accessibility for all users, 
              regardless of their abilities or disabilities. We strive to meet or exceed 
              WCAG 2.1 AA standards and continuously improve our platform's accessibility.
            </p>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Accessibility Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🖱️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Keyboard Navigation</h3>
              <p className="text-gray-600 text-sm">
                Full keyboard access to all features and functions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔊</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Screen Reader Support</h3>
              <p className="text-gray-600 text-sm">
                Optimized for assistive technologies like JAWS, NVDA
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">High Contrast Mode</h3>
              <p className="text-gray-600 text-sm">
                Enhanced visibility with customizable color schemes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Mobile Accessibility</h3>
              <p className="text-gray-600 text-sm">
                Touch-friendly interface with voice control support
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔤</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Voice Navigation</h3>
              <p className="text-gray-600 text-sm">
                Voice commands for hands-free browsing
              </p>
            </div>
          </div>
        </div>

        {/* WCAG Compliance */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            WCAG 2.1 Compliance
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Level AA Standards</h3>
              <p className="text-gray-600 mb-4">
                We comply with WCAG 2.1 Level AA guidelines, ensuring our platform is 
                perceivable, operable, understandable, and robust for most users.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-green-900 mb-3">Compliance Areas:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li><strong>Perceivable:</strong> Information and UI components are detectable</li>
                  <li><strong>Operable:</strong> All functionality is keyboard accessible</li>
                  <li><strong>Understandable:</strong> Content is clear and readable</li>
                  <li><strong>Robust:</strong> Works with assistive technologies</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Level AAA Goals</h3>
              <p className="text-gray-600 mb-4">
                We are working toward WCAG 2.1 Level AAA compliance to provide 
                highest level of accessibility for all users.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-900 mb-3">Improvement Areas:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Enhanced color contrast ratios</li>
                  <li>Improved text spacing and readability</li>
                  <li>Better focus indicators and navigation</li>
                  <li>Voice control and gesture support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How to Use Accessibility Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Use Accessibility Features
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Keyboard Shortcuts</h3>
              <p className="text-gray-600 mb-4">
                Navigate our platform efficiently using keyboard shortcuts:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Navigation</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><kbd className="bg-gray-800 text-white px-2 py-1 rounded">Tab</kbd> - Move through interactive elements</li>
                      <li><kbd className="bg-gray-800 text-white px-2 py-1 rounded">Enter</kbd> - Activate buttons and links</li>
                      <li><kbd className="bg-gray-800 text-white px-2 py-1 rounded">Esc</kbd> - Close modals and menus</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Content</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><kbd className="bg-gray-800 text-white px-2 py-1 rounded">Space</kbd> - Scroll down page content</li>
                      <li><kbd className="bg-gray-800 text-white px-2 py-1 rounded">Shift</kbd> + <kbd className="bg-gray-800 text-white px-2 py-1 rounded">Space</kbd> - Scroll up page content</li>
                      <li><kbd className="bg-gray-800 text-white px-2 py-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-800 text-white px-2 py-1 rounded">F</kbd> - Search or find</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Screen Reader Tips</h3>
              <p className="text-gray-600 mb-4">
                Optimize your experience with screen readers:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Use semantic HTML5 landmarks for navigation</li>
                  <li>Enable ARIA labels and descriptions for complex content</li>
                  <li>Use heading structure (H1-H6) properly</li>
                  <li>Provide alternative text for images and icons</li>
                  <li>Ensure form fields have proper labels and error messages</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Voice Control</h3>
              <p className="text-gray-600 mb-4">
                Use voice commands for hands-free browsing:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li><strong>"Hey Fast Job"</strong> - Activate voice assistant</li>
                  <li><strong>"Search for jobs"</strong> - Open job search</li>
                  <li><strong>"Show my applications"</strong> - View application status</li>
                  <li><strong>"Navigate to profile"</strong> - Go to your profile</li>
                  <li><strong>"Scroll down"</strong> - Move down page content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Options */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Accessibility Options
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Adjustments</h3>
              <p className="text-gray-600 mb-4">
                Customize your visual experience:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Text Size
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="extra-large">Extra Large</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Line Spacing
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="normal">Normal</option>
                      <option value="wide">Wide</option>
                      <option value="extra-wide">Extra Wide</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color Scheme
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="default">Default</option>
                      <option value="high-contrast">High Contrast</option>
                      <option value="dark">Dark Mode</option>
                      <option value="light">Light Mode</option>
                      <option value="custom">Custom Colors</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Animation Preferences
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="enabled">Enabled</option>
                      <option value="reduced">Reduced</option>
                      <option value="disabled">Disabled</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Navigation Options</h3>
              <p className="text-gray-600 mb-4">
                Choose your preferred navigation method:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <input type="radio" id="keyboard-nav" name="navigation" className="mr-2" defaultChecked />
                  <label htmlFor="keyboard-nav" className="text-gray-700">
                    <strong>Keyboard Navigation</strong> - Use keyboard for all interactions
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="radio" id="mouse-nav" name="navigation" className="mr-2" />
                  <label htmlFor="mouse-nav" className="text-gray-700">
                    <strong>Mouse Navigation</strong> - Use mouse with enhanced focus indicators
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="radio" id="touch-nav" name="navigation" className="mr-2" />
                  <label htmlFor="touch-nav" className="text-gray-700">
                    <strong>Touch Navigation</strong> - Optimized for touch devices
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="radio" id="voice-nav" name="navigation" className="mr-2" />
                  <label htmlFor="voice-nav" className="text-gray-700">
                    <strong>Voice Navigation</strong> - Use voice commands for browsing
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Accessibility Support
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Help</h3>
              <p className="text-gray-600 mb-4">
                If you need assistance with accessibility features:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li><strong>Email:</strong> accessibility@fastjobcareer.com</li>
                  <li><strong>Phone:</strong> +92 310 0570707 (Option 3)</li>
                  <li><strong>Live Chat:</strong> Available 24/7 with accessibility specialists</li>
                  <li><strong>Video Tutorials:</strong> Step-by-step accessibility guides</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Training Resources</h3>
              <p className="text-gray-600 mb-4">
                Learn more about using our accessibility features:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-900 mb-2">Screen Reader Guide</h4>
                  <p className="text-blue-800 text-sm mb-2">
                    Comprehensive guide for JAWS, NVDA, and VoiceOver users
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Download Guide
                  </button>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 mb-2">Keyboard Shortcuts</h4>
                  <p className="text-green-800 text-sm mb-2">
                    Complete list of keyboard shortcuts and commands
                  </p>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    View Shortcuts
                  </button>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-bold text-purple-900 mb-2">Voice Commands</h4>
                  <p className="text-purple-800 text-sm mb-2">
                    List of available voice commands and phrases
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    View Commands
                  </button>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-bold text-orange-900 mb-2">Digital Nomad</h4>
                  <p className="text-orange-800 text-sm mb-2">
                    Accessibility tips for remote workers and travelers
                  </p>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Nomad Resources
                  </button>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-900 mb-2">Community Forum</h4>
                  <p className="text-red-800 text-sm mb-2">
                    Connect with other users with accessibility needs
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Join Community
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Help Us Improve
            </h2>
            <p className="text-blue-800 mb-6">
              Your feedback helps us make Fast Job Career more accessible for everyone. 
              If you encounter accessibility barriers or have suggestions, please let us know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Report Accessibility Issue
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Suggest Improvement
              </button>
            </div>
            <div className="mt-4 text-blue-700 text-sm">
              <p>📧 accessibility@fastjobcareer.com | 🌍 Continuous Improvement | ♿ Inclusive Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
