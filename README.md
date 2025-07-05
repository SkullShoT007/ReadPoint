# 📚 ReadPoint - eBook Marketplace

A modern, responsive eBook marketplace built with React that allows users to browse, search, and purchase educational courses and eBooks. Built with a focus on user experience and modern web development practices.

![ReadPoint](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

- **📖 eBook Catalog**: Browse through a comprehensive collection of educational courses and eBooks
- **🔍 Advanced Search**: Search products by title, category, and other filters
- **🛒 Shopping Cart**: Add items to cart and manage your purchases
- **👤 User Authentication**: Secure login and registration system
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🌙 Dark Mode**: Toggle between light and dark themes
- **⭐ Product Ratings**: View and filter products by ratings
- **💳 Order Management**: Track your orders and purchase history
- **🎨 Modern UI**: Beautiful, intuitive interface built with Tailwind CSS

## 🚀 Tech Stack

- **Frontend**: React 19.1.0
- **Routing**: React Router DOM 7.6.2
- **Styling**: Tailwind CSS 3.4.17
- **State Management**: React Context API
- **Backend**: JSON Server with authentication
- **Notifications**: React Toastify
- **Testing**: React Testing Library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/readpoint.git
   cd readpoint
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the backend server**
   ```bash
   # Install JSON Server globally (if not already installed)
   npm install -g json-server
   
   # Start the backend server
   json-server --watch data/db.json --port 8000
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
readpoint/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── elements/       # Basic UI elements
│   │   ├── layouts/        # Layout components
│   │   └── other/          # Other components
│   ├── pages/              # Page components
│   │   ├── home/           # Homepage components
│   │   ├── products/       # Product listing and details
│   │   ├── cart/           # Shopping cart functionality
│   │   ├── order/          # Order management
│   │   └── dashboard/      # User dashboard
│   ├── context/            # React Context providers
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API service functions
│   ├── reducers/           # State reducers
│   └── routes/             # Routing configuration
├── data/
│   ├── db.json            # JSON Server database
│   └── routes.json        # API route configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🎯 Key Features Explained

### Product Catalog
- Browse through a curated collection of educational eBooks and courses
- Filter products by price, rating, availability, and best-seller status
- Detailed product pages with comprehensive information

### User Authentication
- Secure login and registration system
- Protected routes for authenticated users
- User profile management

### Shopping Experience
- Add products to cart with quantity management
- Secure checkout process
- Order tracking and history

### Search & Filter
- Real-time search functionality
- Advanced filtering options
- Responsive search results

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:8000
```

### Tailwind CSS
The project uses Tailwind CSS with custom color scheme:
- `customBlack`: #3a3a3a
- `customWhite`: #ffffff
- `customBackground`: #232428
- `customCard`: #1A1A1D

## 📊 API Endpoints

The application uses JSON Server with the following endpoints:
- `GET /products` - Get all products
- `GET /products/:id` - Get specific product
- `GET /featured_products` - Get featured products
- `POST /orders` - Create new order
- `GET /orders` - Get user orders
- `POST /users` - User registration
- `POST /login` - User authentication

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app) for the project setup
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React Router](https://reactrouter.com/) for client-side routing
- [JSON Server](https://github.com/typicode/json-server) for the mock backend

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

**Happy Reading! 📚✨**
