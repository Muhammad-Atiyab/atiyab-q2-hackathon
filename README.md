Hackathon Website with Next.js

This is a responsive and pixel-accurate website created with Next.js as part of a hackathon challenge. The project closely follows a Figma design provided by our teacher, focusing on delivering high design accuracy, responsiveness across devices, and modularity for scalability.

The application has been successfully deployed on Vercel, showcasing its production readiness.


---

Project Goals

1. Convert a Figma design into a functional, interactive website.


2. Build modular, reusable, and responsive components for better maintainability.


3. Explore and implement features of Next.js, including routing and server-side rendering.




---

Implemented Features

The application includes the following core components:

1. Header.tsx: A navigational header ensuring seamless browsing across pages.


2. Footer.tsx: The footer section containing additional links and details.


3. Blog.tsx: Dynamically displays blog posts or article summaries.


4. Category.tsx: Showcases various product or content categories in a structured manner.


5. Discount.tsx: Highlights offers and discounts in a visually appealing format.


6. ProductCards.tsx: Interactive cards showcasing product information.


7. Promotional.tsx: A banner section dedicated to promoting key features or events.


8. Unique.tsx: A distinct section for highlighting unique features or content.


9. Update.tsx: Displays the latest news, updates, or announcements.




---

Tech Stack

Next.js: Framework for server-side rendering, static generation, and routing.

React.js: For developing flexible and reusable components.

CSS Modules: Used for component-specific styling with better isolation.

Vercel: Hosting and deployment platform.



---

How to Run the Project Locally

Follow these steps to set up and run the project on your local machine:

1. Clone the repository:

git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name


2. Install project dependencies:

npm install


3. Start the development server:

npm run dev


4. Access the application:
Open http://localhost:3000 in your browser to view the site.




---

Live Demo

The project has been deployed on Vercel and can be accessed via the following link:
Live Demo


---

Challenges Faced

Dynamic Routing: The implementation of dynamic routes (e.g., /products/[id]) had to be deferred due to time constraints.

Accessibility: While the website is responsive, additional features for improved accessibility are yet to be added.



---

Planned Enhancements

1. Dynamic Routes: Create pages that dynamically load product or blog details.


2. Performance Tuning: Improve load times by implementing lazy loading and optimizing images.


3. Testing: Introduce unit tests and end-to-end tests to ensure functionality and stability.


4. Accessibility Improvements: Add support for screen readers and better keyboard navigation.




---

Project Structure

📁 app  
│   ├── 📁 assets (Images and static files)  
│   ├── 📁 components (Reusable UI components)  
│   ├── 📁 ui (Helper UI elements)  
│   ├── 📄 layout.tsx (Application layout structure)  
│   ├── 📄 page.tsx (Main page entry point)  
├── 📁 lib (Utility functions)  
├── 📄 globals.css (Global stylesheet)  
├── 📄 README.md (Project documentation)  
└── 📄 next.config.js (Next.js configuration file)


---

Contributions

Contributions are encouraged! If you’d like to add features or improve the project, feel free to:

1. Fork the repository.


2. Create a feature branch.


3. Submit a pull request for review.
