// src/MobileSocialIntegration.js
import React, { useState, useEffect } from 'react';
import { Smartphone, Instagram, Facebook, Twitter, Share2, Bell, MapPin, Clock, Gift, Star, TrendingUp, Users, Heart, MessageCircle, Send, Camera, Hash, Calendar, ShoppingBag, Coffee, CreditCard, Home, User, QrCode, Sparkles, Zap, ArrowRight, Check, X, ChevronRight, Wifi, BellRing, Target, Award } from 'lucide-react';

const MobileSocialIntegration = () => {
  // Mobile App State
  const [activeView, setActiveView] = useState('customer-app');
  const [customerAppScreen, setCustomerAppScreen] = useState('home');
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  // Customer data for mobile app
  const [mobileCustomer] = useState({
    name: 'Sofia Hernández',
    phone: '555-0124',
    points: 285,
    tier: 'Gold',
    favoriteItems: ['Chai Latte', 'Pan Dulce'],
    savedCards: ['**** 4242'],
    notifications: true
  });

  // Social Media State
  const [socialPosts, setSocialPosts] = useState([
    {
      id: 1,
      platform: 'instagram',
      content: '☕ Rainy day special! 20% off all hot drinks today only! 🌧️ #CafeYasin #RainyDayVibes',
      image: '🌧️☕',
      scheduled: '2025-01-21 08:00',
      engagement: { likes: 145, comments: 23, shares: 12 },
      status: 'scheduled'
    },
    {
      id: 2,
      platform: 'facebook',
      content: 'New arrival! Try our Turmeric Latte - the perfect blend of health and taste 🌟',
      image: '🥛✨',
      scheduled: '2025-01-21 14:00',
      engagement: { likes: 0, comments: 0, shares: 0 },
      status: 'draft'
    }
  ]);

  const [campaignMetrics] = useState({
    reach: 15420,
    engagement: 8.5,
    newCustomers: 47,
    conversionRate: 3.2,
    roi: 285
  });

  const [upcomingOrders] = useState([
    {
      id: 1001,
      customer: 'Juan Pérez',
      items: ['2x Cappuccino', '1x Pan Dulce'],
      total: 12.00,
      pickupTime: '8:15 AM',
      status: 'preparing',
      prepTime: 5
    },
    {
      id: 1002,
      customer: 'Ana López',
      items: ['1x Chai Latte', '2x Torta de Jamón'],
      total: 22.00,
      pickupTime: '8:30 AM',
      status: 'confirmed',
      prepTime: 10
    }
  ]);

  const [menuItems] = useState([
    {
      category: 'Hot Drinks',
      items: [
        { name: 'Café Americano', price: 3.50, calories: 5, image: '☕', popular: true },
        { name: 'Cappuccino', price: 4.50, calories: 120, image: '☕', popular: true },
        { name: 'Chai Latte', price: 5.00, calories: 190, image: '🍵', new: true },
        { name: 'Turmeric Latte', price: 5.50, calories: 150, image: '🥛', new: true }
      ]
    },
    {
      category: 'Food',
      items: [
        { name: 'Pan Dulce', price: 3.00, calories: 280, image: '🥐' },
        { name: 'Torta de Jamón', price: 8.50, calories: 450, image: '🥪' },
        { name: 'Yogurt Parfait', price: 6.00, calories: 220, image: '🥤', healthy: true }
      ]
    }
  ]);

  const [aiSocialSuggestions] = useState([
    {
      type: 'content',
      title: 'User-Generated Content Campaign',
      description: 'Launch #MyCafeYasinMoment - customers share photos for 50 bonus points',
      expectedReach: 25000,
      effort: 'low'
    },
    {
      type: 'promotion',
      title: 'Flash Sale Alert',
      description: 'Send push notification: "Next 20 customers get free pastry with coffee!"',
      expectedRevenue: 350,
      effort: 'low'
    },
    {
      type: 'influencer',
      title: 'Micro-Influencer Partnership',
      description: 'Partner with @LocalFoodie (5K followers) for café review',
      expectedNewCustomers: 150,
      effort: 'medium'
    }
  ]);

  // Mobile App Component
  const CustomerMobileApp = () => (
    <div className="bg-gray-900 rounded-xl overflow-hidden" style={{ width: '375px', height: '812px' }}>
      {/* Phone Status Bar */}
      <div className="bg-black text-white text-xs px-6 py-2 flex justify-between">
        <span>9:41 AM</span>
        <div className="flex gap-1">
          <Wifi className="w-3 h-3" />
          <span>5G</span>
          <span>100%</span>
        </div>
      </div>

      {/* App Content */}
      <div className="bg-white h-full">
        {customerAppScreen === 'home' && (
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-b-3xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm opacity-90">Good morning,</p>
                  <h2 className="text-2xl font-bold">{mobileCustomer.name}</h2>
                </div>
                <button className="p-2 bg-white/20 rounded-full">
                  <Bell className="w-5 h-5" />
                </button>
              </div>
              
              {/* Points Card */}
              <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm opacity-90">Your Points</p>
                    <p className="text-3xl font-bold">{mobileCustomer.points}</p>
                    <p className="text-xs mt-1">{mobileCustomer.tier} Member</p>
                  </div>
                  <div className="bg-white/30 rounded-lg p-3">
                    <Gift className="w-8 h-8" />
                  </div>
                </div>
                <div className="mt-3 bg-white/10 rounded-full h-2">
                  <div className="bg-white rounded-full h-2 w-3/4"></div>
                </div>
                <p className="text-xs mt-2 opacity-90">15 points to next reward!</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setCustomerAppScreen('order')}
                  className="bg-purple-100 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-purple-200 transition"
                >
                  <Coffee className="w-8 h-8 text-purple-600" />
                  <span className="text-sm font-medium">Order Ahead</span>
                </button>
                
                <button className="bg-blue-100 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-blue-200 transition">
                  <QrCode className="w-8 h-8 text-blue-600" />
                  <span className="text-sm font-medium">Scan & Pay</span>
                </button>
              </div>

              {/* Today's Special */}
              <div className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl p-4 text-white mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Today's Special</p>
                    <p className="text-lg font-bold">Turmeric Latte</p>
                    <p className="text-sm opacity-90">20% off until 2 PM</p>
                  </div>
                  <div className="text-4xl">🥛</div>
                </div>
              </div>

              {/* Recent Orders */}
              <div>
                <h3 className="font-semibold mb-3">Recent Orders</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium">Morning Pick-me-up</p>
                      <p className="text-xs text-gray-600">Chai Latte, Pan Dulce</p>
                    </div>
                    <button className="text-sm text-purple-600 font-medium">Reorder</button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium">Yesterday's Lunch</p>
                      <p className="text-xs text-gray-600">Cappuccino, Torta de Jamón</p>
                    </div>
                    <button className="text-sm text-purple-600 font-medium">Reorder</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t px-6 py-3">
              <div className="flex justify-around">
                <button className="flex flex-col items-center gap-1 text-purple-600">
                  <Home className="w-5 h-5" />
                  <span className="text-xs">Home</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="text-xs">Orders</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                  <Gift className="w-5 h-5" />
                  <span className="text-xs">Rewards</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                  <User className="w-5 h-5" />
                  <span className="text-xs">Profile</span>
                </button>
              </div>
            </div>
          </>
        )}

        {customerAppScreen === 'order' && (
          <>
            {/* Order Header */}
            <div className="bg-purple-600 text-white p-4 flex items-center gap-4">
              <button onClick={() => setCustomerAppScreen('home')}>
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-lg font-semibold">Order Ahead</h2>
            </div>

            {/* Store Info */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Café Yasin - Downtown</p>
                  <p className="text-sm text-gray-600">Ready in 5-10 min</p>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="p-4 pb-32 overflow-y-auto" style={{ maxHeight: '600px' }}>
              {menuItems.map((category, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="font-semibold mb-3">{category.category}</h3>
                  <div className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{item.image}</div>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-600">{item.calories} cal</p>
                            <p className="text-sm font-semibold text-purple-600">${item.price}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {item.popular && (
                            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Popular</span>
                          )}
                          {item.new && (
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">New</span>
                          )}
                          <button className="bg-purple-600 text-white p-2 rounded-lg">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4">
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                View Cart (2 items) - $8.50
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  // Social Media Dashboard
  const SocialMediaDashboard = () => (
    <div className="space-y-6">
      {/* Campaign Performance */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">Social Media Performance</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <p className="text-sm opacity-90">Total Reach</p>
            <p className="text-2xl font-bold">{campaignMetrics.reach.toLocaleString()}</p>
            <p className="text-xs opacity-75">+23% this week</p>
          </div>
          <div>
            <p className="text-sm opacity-90">Engagement Rate</p>
            <p className="text-2xl font-bold">{campaignMetrics.engagement}%</p>
            <p className="text-xs opacity-75">Above average!</p>
          </div>
          <div>
            <p className="text-sm opacity-90">New Customers</p>
            <p className="text-2xl font-bold">{campaignMetrics.newCustomers}</p>
            <p className="text-xs opacity-75">From social</p>
          </div>
          <div>
            <p className="text-sm opacity-90">Conversion Rate</p>
            <p className="text-2xl font-bold">{campaignMetrics.conversionRate}%</p>
            <p className="text-xs opacity-75">Click to visit</p>
          </div>
          <div>
            <p className="text-sm opacity-90">ROI</p>
            <p className="text-2xl font-bold">{campaignMetrics.roi}%</p>
            <p className="text-xs opacity-75">Return on ad spend</p>
          </div>
        </div>
      </div>

      {/* AI Social Suggestions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Sparkles className="w-6 h-6 text-purple-600 mr-2" />
          <h3 className="text-lg font-semibold">AI Marketing Suggestions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiSocialSuggestions.map((suggestion, idx) => (
            <div key={idx} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  suggestion.effort === 'low' ? 'bg-green-100 text-green-600' :
                  'bg-yellow-100 text-yellow-600'
                }`}>
                  {suggestion.effort} effort
                </span>
                {suggestion.type === 'content' && <Camera className="w-4 h-4 text-purple-600" />}
                {suggestion.type === 'promotion' && <Zap className="w-4 h-4 text-yellow-600" />}
                {suggestion.type === 'influencer' && <Users className="w-4 h-4 text-blue-600" />}
              </div>
              <h4 className="font-semibold mb-1">{suggestion.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{suggestion.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-purple-600 font-medium">
                  {suggestion.expectedReach && `${suggestion.expectedReach.toLocaleString()} reach`}
                  {suggestion.expectedRevenue && `$${suggestion.expectedRevenue} revenue`}
                  {suggestion.expectedNewCustomers && `${suggestion.expectedNewCustomers} new customers`}
                </p>
                <button className="text-sm text-purple-600 hover:text-purple-800">
                  Start →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scheduled Posts */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Scheduled Posts</h3>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
            Create Post
          </button>
        </div>
        <div className="space-y-4">
          {socialPosts.map((post) => (
            <div key={post.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {post.platform === 'instagram' && <Instagram className="w-5 h-5 text-pink-600" />}
                  {post.platform === 'facebook' && <Facebook className="w-5 h-5 text-blue-600" />}
                  <div>
                    <p className="font-medium capitalize">{post.platform}</p>
                    <p className="text-xs text-gray-600">{post.scheduled}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  post.status === 'scheduled' ? 'bg-green-100 text-green-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {post.status}
                </span>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">{post.image}</div>
                <div className="flex-1">
                  <p className="text-sm">{post.content}</p>
                  {post.engagement.likes > 0 && (
                    <div className="flex gap-4 mt-2 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" /> {post.engagement.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" /> {post.engagement.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="w-3 h-3" /> {post.engagement.shares}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Generated Content */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">#CafeYasin Feed</h3>
          <span className="text-sm text-gray-600">247 posts this month</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-xs text-gray-600">@user{i}</p>
                <p className="text-xs text-purple-600 mt-1">View →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Mobile Order Management
  const MobileOrderManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Mobile Orders Queue</h3>
          <div className="flex items-center gap-2">
            <BellRing className="w-5 h-5 text-orange-500 animate-pulse" />
            <span className="text-sm font-medium">{upcomingOrders.length} active orders</span>
          </div>
        </div>

        <div className="space-y-4">
          {upcomingOrders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4 bg-gradient-to-r from-purple-50 to-blue-50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold">Order #{order.id}</p>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Pickup: {order.pickupTime}</p>
                  <p className="text-xs text-gray-600">In {order.prepTime} minutes</p>
                </div>
              </div>
              
              <div className="bg-white rounded p-2 mb-3">
                <p className="text-sm">{order.items.join(', ')}</p>
                <p className="text-sm font-semibold mt-1">${order.total.toFixed(2)}</p>
              </div>

              <div className="flex gap-2">
                {order.status === 'confirmed' && (
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Start Preparing
                  </button>
                )}
                {order.status === 'preparing' && (
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Ready for Pickup
                  </button>
                )}
                <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition">
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Push Notification Center */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Bell className="w-6 h-6 text-purple-600 mr-2" />
          <h3 className="text-lg font-semibold">Smart Push Notifications</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Morning Rush Alert</h4>
            <p className="text-sm text-gray-600 mb-3">Send to: Gold & Silver members</p>
            <div className="bg-gray-100 rounded p-3 mb-3">
              <p className="text-sm">📱 "Skip the line! Order ahead and get 2x points before 10 AM today!"</p>
            </div>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700 transition">
              Send to 156 customers
            </button>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Weather-Based Promo</h4>
            <p className="text-sm text-gray-600 mb-3">Automated: Rainy day detected</p>
            <div className="bg-gray-100 rounded p-3 mb-3">
              <p className="text-sm">🌧️ "Rainy day comfort! All hot drinks 20% off. We'll have it ready when you arrive!"</p>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg text-sm hover:bg-green-700 transition">
              Auto-sending at 7 AM
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Mobile & Social Integration</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setActiveView('customer-app')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeView === 'customer-app' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Customer App
              </button>
              <button
                onClick={() => setActiveView('social-media')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeView === 'social-media' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Social Media
              </button>
              <button
                onClick={() => setActiveView('mobile-orders')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeView === 'mobile-orders' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Mobile Orders
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {activeView === 'customer-app' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Phone Preview */}
            <div className="flex justify-center">
              <CustomerMobileApp />
            </div>

            {/* App Analytics */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Mobile App Analytics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-3xl font-bold text-purple-600">2,847</p>
                    <p className="text-sm text-gray-600">Active Users</p>
                    <p className="text-xs text-green-600 mt-1">↑ 23% this month</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-3xl font-bold text-blue-600">68%</p>
                    <p className="text-sm text-gray-600">Order Ahead Rate</p>
                    <p className="text-xs text-green-600 mt-1">↑ 15% this week</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">4.8</p>
                    <p className="text-sm text-gray-600">App Store Rating</p>
                    <p className="text-xs text-gray-600 mt-1">487 reviews</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-3xl font-bold text-orange-600">$34.50</p>
                    <p className="text-sm text-gray-600">Avg Mobile Order</p>
                    <p className="text-xs text-green-600 mt-1">↑ vs $19 in-store</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Popular Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Coffee className="w-5 h-5 text-purple-600" />
                      <span className="text-sm">Order Ahead</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Gift className="w-5 h-5 text-blue-600" />
                      <span className="text-sm">Loyalty Points</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <QrCode className="w-5 h-5 text-green-600" />
                      <span className="text-sm">QR Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                      </div>
                      <span className="text-sm font-medium">67%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Push Notification Performance</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-3xl font-bold">42%</p>
                    <p className="text-sm opacity-90">Open Rate</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">18%</p>
                    <p className="text-sm opacity-90">Conversion Rate</p>
                  </div>
                </div>
                <p className="text-sm mt-4 opacity-90">
                  Best performing: "Your favorite Chai Latte is waiting!" - 67% open rate
                </p>
              </div>
            </div>
          </div>
        )}

        {activeView === 'social-media' && <SocialMediaDashboard />}
        {activeView === 'mobile-orders' && <MobileOrderManagement />}
      </div>
    </div>
  );
};

// Add Plus icon component
const Plus = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

export default MobileSocialIntegration;