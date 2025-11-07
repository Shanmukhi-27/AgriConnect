# AgriConnect - Agricultural Community Platform

AgriConnect is a comprehensive digital platform designed to bridge the gap between farmers, agricultural experts, administrators, and the general public. The platform serves as a hub for knowledge sharing, expert consultation, and community building in the agricultural sector.

## 🌱 Problem Statement

Farming is one of the most essential sectors for human survival, yet farmers continue to face difficulties such as:
- Limited access to resources
- Lack of expert guidance
- Poor connectivity with other industries
- Insufficient awareness in society about the importance of agriculture

## 🎯 Solution

AgriConnect addresses these challenges by providing:
- **Resource Library**: Access to comprehensive agricultural resources and guides
- **Expert Network**: Connect with certified agricultural experts
- **Training Programs**: Structured learning programs and certifications
- **Community Platform**: Foster collaboration between all stakeholders
- **Analytics Dashboard**: Track progress and get insights

## 👥 User Types

1. **Admin**: Manage and maintain content, ensure data accuracy, oversee user activities
2. **Farmer**: Access resources, connect with sectors, participate in programs
3. **Agricultural Expert**: Provide guidance, share knowledge, support farmers
4. **Public Users**: Learn about farming, explore resources, engage in discussions

## 🚀 Features

### Component Design & Structure
- Modular React components with clean architecture
- Reusable UI components (ResourceCard, ExpertCard, WeatherWidget)
- Logical component hierarchy and folder structure

### React Hooks Implementation
- **useState**: Form management, UI state control
- **useEffect**: Data fetching, side effects management
- **useContext**: Global state access
- **Custom Hooks**: useApi for API calls, useLocalStorage for persistence

### State Management
- Context API for global state management
- Local state for component-specific data
- Persistent storage using localStorage

### Routing & Navigation
- React Router for client-side routing
- Responsive navigation with Material-UI
- Protected routes for authenticated users
- Mobile-friendly drawer navigation

### API Integration
- Axios for HTTP requests
- Mock data simulation
- Loading and error state handling
- RESTful API structure ready

### Data Persistence
- localStorage for user preferences and authentication
- Session persistence across browser sessions
- Theme preferences storage
- User data caching

### UI/UX Design
- Material-UI for consistent design system
- Responsive design for all screen sizes
- Dark/Light theme toggle
- Smooth animations with Framer Motion
- Accessibility compliant components

### Advanced Features
- **Charts & Analytics**: Recharts integration for data visualization
- **Animations**: Framer Motion for smooth transitions
- **Theme System**: Dynamic dark/light mode switching
- **Form Validation**: Comprehensive form handling
- **Search Functionality**: Real-time resource filtering
- **Weather Widget**: Agricultural weather information
- **Progress Tracking**: User progress visualization

## 🛠️ Technology Stack

- **Frontend**: React 19.1.1
- **Routing**: React Router DOM 7.9.5
- **UI Framework**: Material-UI 5.15.0
- **State Management**: React Context API
- **Charts**: Recharts 2.8.0
- **Animations**: Framer Motion 10.16.0
- **HTTP Client**: Axios 1.6.0
- **Build Tool**: Vite 7.1.7
- **Styling**: Emotion (CSS-in-JS)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── ResourceCard.jsx # Resource display card
│   ├── ExpertCard.jsx  # Expert profile card
│   └── WeatherWidget.jsx # Weather information widget
├── context/            # Context providers
│   └── AppContext.jsx  # Global state management
├── hooks/              # Custom React hooks
│   └── useApi.js       # API and localStorage hooks
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About page
│   ├── Services.jsx    # Services page
│   ├── Contact.jsx     # Contact page
│   ├── Dashboard.jsx   # User dashboard
│   └── Login.jsx       # Authentication page
├── data/               # Mock data and constants
│   └── mockData.js     # Sample data for development
└── utils/              # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd AgriConnect/Agriconnect
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Features Walkthrough

### Home Page
- Hero section with platform introduction
- Statistics dashboard showing platform metrics
- Weather widget for agricultural planning
- Featured resources and experts
- Quick action buttons for common tasks

### Dashboard
- Personalized user statistics
- Activity overview with charts
- Recent activities timeline
- Current programs progress
- Weekly activity tracking

### Services
- Comprehensive service catalog
- Training programs listing
- Pricing tiers comparison
- Feature comparison tables

### Expert Network
- Expert profiles with ratings
- Specialization filtering
- Connection functionality
- Expert consultation booking

### Resource Library
- Searchable resource database
- Category-based filtering
- Resource cards with metadata
- Reading time estimates

## 🎨 Design System

### Color Palette
- **Primary**: Green (#2e7d32) - Represents agriculture and growth
- **Secondary**: Orange (#ff8f00) - Represents energy and harvest
- **Background**: Adaptive based on theme selection

### Typography
- **Font Family**: Roboto, Helvetica, Arial
- **Headings**: Semi-bold (600) for better hierarchy
- **Body Text**: Regular (400) for readability

### Components
- **Cards**: Rounded corners (12px) with subtle shadows
- **Buttons**: No text transform, rounded (8px)
- **Navigation**: Sticky header with responsive drawer

## 🔧 Development Guidelines

### Code Standards
- Use functional components with hooks
- Implement proper error boundaries
- Follow React best practices
- Use TypeScript-ready patterns
- Maintain component reusability

### Performance Optimization
- Lazy loading for route components
- Memoization for expensive calculations
- Optimized re-renders with proper dependencies
- Image optimization and lazy loading

### Accessibility
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 🚀 Deployment

The application is ready for deployment on:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Static website hosting

### Environment Variables
Create a `.env` file for production:
```
VITE_API_BASE_URL=your_api_url
VITE_APP_NAME=AgriConnect
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Material-UI team for the excellent component library
- React team for the amazing framework
- Agricultural community for inspiration and requirements
- Open source contributors for various packages used

## 📞 Support

For support and questions:
- Email: support@agriconnect.com
- Documentation: [Project Wiki]
- Issues: [GitHub Issues]

---

**AgriConnect** - Bridging the gap between farmers, experts, and society through technology. 🌱