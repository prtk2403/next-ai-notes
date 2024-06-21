const FeaturesSection = () => {
    return (
      <section className="py-12" style={{ backgroundColor: '#0a0a14' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8" style={{ color: '#9b9ad0' }}>Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg shadow-lg p-6" style={{ backgroundColor: '#37357e' }}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full mb-4" style={{ backgroundColor: '#534ebc' }}>
                {/* Icon */}
                <svg className="h-6 w-6" fill="#0a0a14" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2H2zm0 2h16v6H2V7zm1.5 1.5v1h3v-1h-3zm6 0v1h3v-1h-3zm6 0v1h3v-1h-3zm-12 3v1h3v-1h-3zm6 0v1h3v-1h-3zm6 0v1h3v-1h-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#9b9ad0' }}>Smart Note Organization</h3>
              <p style={{ color: '#e2e1ef' }}>
                Effortlessly organize your notes with intelligent categorization and tagging features, making it easy to find what you need.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="rounded-lg shadow-lg p-6" style={{ backgroundColor: '#37357e' }}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full mb-4" style={{ backgroundColor: '#534ebc' }}>
                {/* Icon */}
                <svg className="h-6 w-6" fill="#0a0a14" viewBox="0 0 20 20">
                  <path d="M12 8V6a4 4 0 00-8 0v2a2 2 0 00-2 2v4a2 2 0 002 2h2.586l1 1H4a1 1 0 100 2h12a1 1 0 100-2h-3.586l1-1H16a2 2 0 002-2v-4a2 2 0 00-2-2h-4zm-2-2a2 2 0 114 0v2h-4V6zm-2 4h8v4H8v-4zm0 0H4v4h4v-4zm0-2v2H6V6a2 2 0 114 0v2H8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#9b9ad0' }}>AI Assistant</h3>
              <p style={{ color: '#e2e1ef' }}>
                Get answers to all your questions related to your notes with our built-in AI assistant, designed to help you study and review efficiently.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="rounded-lg shadow-lg p-6" style={{ backgroundColor: '#37357e' }}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full mb-4" style={{ backgroundColor: '#534ebc' }}>
                {/* Icon */}
                <svg className="h-6 w-6" fill="#0a0a14" viewBox="0 0 20 20">
                  <path d="M9 12a3 3 0 100-6 3 3 0 000 6zm0 2a7 7 0 100-14 7 7 0 000 14zm6.293-.293a1 1 0 00-1.414 1.414A9 9 0 119 18a9 9 0 016.293-2.293z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#9b9ad0' }}>Advanced Search</h3>
              <p style={{ color: '#e2e1ef' }}>
                Quickly find specific notes or topics using our advanced search functionality, saving you time and effort.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="rounded-lg shadow-lg p-6" style={{ backgroundColor: '#37357e' }}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full mb-4" style={{ backgroundColor: '#534ebc' }}>
                {/* Icon */}
                <svg className="h-6 w-6" fill="#0a0a14" viewBox="0 0 20 20">
                  <path d="M11 2a1 1 0 011 1v4a1 1 0 01-2 0V3a1 1 0 011-1zm2 12v1H7v-1a5 5 0 115 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#9b9ad0' }}>Secure Cloud Sync</h3>
              <p style={{ color: '#e2e1ef' }}>
                Sync your notes securely across all your devices with our cloud service, ensuring you have access to your notes anytime, anywhere.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="rounded-lg shadow-lg p-6" style={{ backgroundColor: '#37357e' }}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full mb-4" style={{ backgroundColor: '#534ebc' }}>
                {/* Icon */}
                <svg className="h-6 w-6" fill="#0a0a14" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#9b9ad0' }}>Reminder Notifications</h3>
              <p style={{ color: '#e2e1ef' }}>
                Set reminders for important notes and tasks, so you never miss a deadline or forget important information.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="rounded-lg shadow-lg p-6" style={{ backgroundColor: '#37357e' }}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full mb-4" style={{ backgroundColor: '#534ebc' }}>
                {/* Icon */}
                <svg className="h-6 w-6" fill="#0a0a14" viewBox="0 0 20 20">
                  <path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm1 2h10v12H5V4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#9b9ad0' }}>Rich Text Editing</h3>
              <p style={{ color: '#e2e1ef' }}>
                Enjoy a rich text editor with formatting options to create detailed and organized notes.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default FeaturesSection