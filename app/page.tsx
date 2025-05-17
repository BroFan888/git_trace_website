import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            GitTrace
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            A beautiful Git client with elegant interface and zero network access. 
            Your code stays completely private, right where it belongs.
          </p>
          <div className="mt-10">
            <a
              href="macappstore://itunes.apple.com/app/6740000900" 
              className="inline-flex items-center px-8 py-3 rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Download from Mac App Store
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Video Section */}
        <div className="mb-32">
          <video
            className="w-full rounded-2xl shadow-2xl"
            controls
            poster="/git_trace_website/v1_screens/v1_main_screen.png"
          >
            <source src="/git_trace_website/v1_screens/v1_show.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark Mode Introduction */}
        <div className="mb-32 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Light & Dark, Your Choice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Seamlessly switch between light and dark modes. 
            Every detail is carefully crafted for both appearances.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image
              src="/git_trace_website/v1_screens/v1_main_screen.png"
              alt="Light Mode"
              width={1400}
              height={900}
              className="rounded-2xl shadow-xl w-full"
            />
            <Image
              src="/git_trace_website/v1_screens/v1_main_screen_dark.png"
              alt="Dark Mode"
              width={1400}
              height={900}
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-32">
          {/* Feature 1 - Changed Files View */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Changed Files View
            </h2>
            <div className="space-y-8">
              <Image
                src="/git_trace_website/v1_screens/v1_changed_files_screen.png"
                alt="Changed Files View - Light"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
                priority
              />
              <Image
                src="/git_trace_website/v1_screens/v1_changed_files_screen_dark.png"
                alt="Changed Files View - Dark"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Clearly displays file changes and helps you quickly understand the content of each commit. 
              Supports multiple view modes for enhanced visualization.
            </p>
          </div>

          {/* Feature 2 - Commit History */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Commit History Browser
            </h2>
            <div className="space-y-8">
              <Image
                src="/git_trace_website/v1_screens/v1_search_screen.png"
                alt="Commit History - Light"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
              />
              <Image
                src="/git_trace_website/v1_screens/v1_search_screen_dark.png"
                alt="Commit History - Dark"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Visualize commit history and easily track project evolution. 
              Powerful search functionality helps you quickly locate key commits.
            </p>
          </div>

          {/* Feature 3 - Code Diff */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Code Diff View
            </h2>
            <div className="space-y-8">
              <Image
                src="/git_trace_website/v1_screens/v1_diff_screen.png"
                alt="Code Diff - Light"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
              />
              <Image
                src="/git_trace_website/v1_screens/v1_diff_screen_dark.png"
                alt="Code Diff - Dark"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Intelligent code comparison functionality with multiple diff modes, 
              helping you precisely locate every code change.
            </p>
          </div>

          {/* Feature 4 - Privacy */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Privacy Protection
            </h2>
            <div className="space-y-8">
              <Image
                src="/git_trace_website/v1_screens/v1_privacy_screen.png"
                alt="Privacy Protection - Light"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
              />
              <Image
                src="/git_trace_website/v1_screens/v1_privacy_screen_dark.png"
                alt="Privacy Protection - Dark"
                width="1400"
                height="900"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Your code security is paramount. GitTrace ensures all operations are performed locally, 
              with no code ever being uploaded to the cloud.
            </p>
          </div>

          {/* New Feature - Keyboard Shortcuts */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Efficient Keyboard Shortcuts
            </h2>
            <div className="max-w-[1400px] mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
                  Navigate Like a Pro
                </h3>

                {/* Previous Search Page */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="space-y-1">
                    <p className="text-lg font-medium text-gray-900">Previous Search Page</p>
                    <p className="text-gray-600">Navigate to previous search results page</p>
                  </div>
                  <div className="flex gap-2">
                    <kbd className="px-3 py-1 bg-white rounded-lg shadow text-sm font-mono">⌘</kbd>
                    <kbd className="px-3 py-1 bg-white rounded-lg shadow text-sm font-mono">←</kbd>
                  </div>
                </div>

                {/* Next Search Page */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="space-y-1">
                    <p className="text-lg font-medium text-gray-900">Next Search Page</p>
                    <p className="text-gray-600">Navigate to next search results page</p>
                  </div>
                  <div className="flex gap-2">
                    <kbd className="px-3 py-1 bg-white rounded-lg shadow text-sm font-mono">⌘</kbd>
                    <kbd className="px-3 py-1 bg-white rounded-lg shadow text-sm font-mono">→</kbd>
                  </div>
                </div>
                
                {/* File Tree Navigation */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="space-y-1">
                    <p className="text-lg font-medium text-gray-900">File Tree Navigation</p>
                    <p className="text-gray-600">Quick navigation through files in diff view</p>
                  </div>
                  <div className="flex gap-2">
                    <kbd className="px-3 py-1 bg-white rounded-lg shadow text-sm font-mono">↑</kbd>
                    <kbd className="px-3 py-1 bg-white rounded-lg shadow text-sm font-mono">↓</kbd>
                  </div>
                </div>

                {/* Previous Commit */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="space-y-1">
                    <p className="text-lg font-medium text-gray-900">Previous Commit</p>
                    <p className="text-gray-600">Jump to the previous commit</p>
                  </div>
                  <div className="flex gap-2">
                    <kbd className="px-3 py-1 bg-white rounded-lg shadow text-sm font-mono">⌘</kbd>
                    <kbd className="px-3 py-1 bg-white rounded-lg shadow text-sm font-mono">↑</kbd>
                  </div>
                </div>

                {/* Next Commit */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="space-y-1">
                    <p className="text-lg font-medium text-gray-900">Next Commit</p>
                    <p className="text-gray-600">Jump to the next commit</p>
                  </div>
                  <div className="flex gap-2">
                    <kbd className="px-3 py-1 bg-white rounded-lg shadow text-sm font-mono">⌘</kbd>
                    <kbd className="px-3 py-1 bg-white rounded-lg shadow text-sm font-mono">↓</kbd>
                  </div>
                </div>

                {/* Quick Search */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="space-y-1">
                    <p className="text-lg font-medium text-gray-900">Quick Search</p>
                    <p className="text-gray-600 text-left">Search commits by author name or hash or commit message</p>
                  </div>
                  <div className="flex gap-2">
                    <kbd className="px-3 py-1 bg-white rounded-lg shadow text-sm font-mono">Enter</kbd>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Image
                src="/git_trace_website/v1_screens/v1_search_shortcuts_screen.png"
                alt="Privacy Protection - Light"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
              />
              <Image
                src="/git_trace_website/v1_screens/v1_search_shortcuts_screen_dark.png"
                alt="Privacy Protection - Dark"
                width="1400"
                height="900"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>

            <div className="mb-32">
              <video
                className="w-full rounded-2xl shadow-2xl"
                controls
                poster="/git_trace_website/v1_screens/v1_main_screen.png"
              >
                <source src="/git_trace_website/v1_screens/v1_shortcuts_demo.mp4" type="video/mp4" />
              </video>
            </div>
        
            <p className="text-xl text-gray-600 text-left">
              Designed for efficiency, GitTrace offers intuitive keyboard shortcuts 
              that make navigation and commit browsing feel natural and fast. 
              Branch history automatically updates when switching branches, and commit 
              search activates instantly with Enter key.
            </p>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-gray-600 space-y-4">
          <div className="max-w-2xl mx-auto bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Need Technical Support?</h3>
            <p className="text-gray-600 mb-3">
              We&apos;re here to help! Feel free to reach out anytime for questions or suggestions at:
            </p>
            <a 
              href="mailto:fan1056218492@gmail.com" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              fan1056218492@gmail.com
            </a>
          </div>
          <p>© 2025 GitTrace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
