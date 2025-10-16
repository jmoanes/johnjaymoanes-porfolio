# Portfolio Website

A modern, responsive React portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, form validation, and a clean design.

## 🚀 Features

- **4 Main Pages**: Home, Projects, Contact, and Resume
- **Responsive Design**: Works perfectly on mobile and desktop
- **React Router**: Smooth navigation between pages
- **Form Validation**: Contact form with JavaScript validation
- **Modern UI**: Clean design with hover effects and animations
- **Reusable Components**: Navbar and Footer used across all pages

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   └── Footer.js          # Footer component
├── pages/
│   ├── Home.js            # Home page with hero section
│   ├── Projects.js        # Projects showcase
│   ├── Contact.js         # Contact form
│   └── Resume.js          # Resume and skills
├── styles/
│   ├── index.css          # Global styles
│   ├── Navbar.css         # Navigation styles
│   ├── Footer.css         # Footer styles
│   ├── Home.css           # Home page styles
│   ├── Projects.css       # Projects page styles
│   ├── Contact.css        # Contact page styles
│   └── Resume.css         # Resume page styles
├── App.js                 # Main app component
└── index.js               # Entry point
```

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update the following files with your information:

**Home Page** (`src/pages/Home.js`):
- Change "Your Name" to your actual name
- Update the job title and description
- Replace the placeholder image section

**Contact Page** (`src/pages/Contact.js`):
- Update email address
- Add your LinkedIn and GitHub URLs
- Customize the contact message

**Projects Page** (`src/pages/Projects.js`):
- Replace the sample projects with your actual projects
- Update project descriptions, tech stacks, and links
- Add or remove projects as needed

**Resume Page** (`src/pages/Resume.js`):
- Update skills with your actual skills and proficiency levels
- Replace experience and education with your information
- Add your certifications
- Update the resume download link

### Styling
- **Colors**: Modify the CSS custom properties in `src/styles/index.css`
- **Fonts**: Change the Google Fonts import in `public/index.html`
- **Layout**: Adjust grid layouts and spacing in individual CSS files

### Adding a Resume PDF
1. Place your resume PDF in the `public` folder
2. Update the download link in `src/pages/Resume.js` to point to your PDF

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 Features Breakdown

### Home Page
- Hero section with introduction
- About preview
- Skills showcase with icons
- Call-to-action buttons

### Projects Page
- Project cards with hover effects
- Tech stack tags
- Live demo and GitHub links
- Responsive grid layout

### Contact Page
- Contact form with validation
- Contact information display
- Social media links
- Success/error messages

### Resume Page
- Animated skill bars
- Timeline for experience and education
- Certifications section
- Download resume button

## 🔧 Form Integration

The contact form is integrated with **EmailJS** for client-side email sending.

### EmailJS Setup:

1. **Sign up** at [EmailJS](https://www.emailjs.com/)
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (John Jay Moanes)
   - `{{reply_to}}` - Reply-to email
4. **Get your credentials**:
   - Service ID: `service_olf6rcl` (already configured)
   - Template ID: `__ejs-test-mail-service_` (already configured)
   - Public Key: Get from EmailJS dashboard
5. **Update configuration** in `src/config/emailjs.js`:
   ```javascript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'service_olf6rcl',
     TEMPLATE_ID: '__ejs-test-mail-service_',
     PUBLIC_KEY: 'YOUR_ACTUAL_PUBLIC_KEY', // Replace this
   };
   ```

### Alternative Integrations:
- **Formspree**: For form handling
- **Netlify Forms**: If deploying to Netlify

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

---

**Happy coding!** 🎉
