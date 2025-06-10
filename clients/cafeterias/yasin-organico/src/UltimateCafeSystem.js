// src/UltimateCafeSystem.js
import React, { useState, useEffect } from 'react';
import { CreditCard, Smartphone, DollarSign, ShoppingCart, Coffee, TrendingUp, Package, AlertCircle, Activity, Zap, Users, Clock, PieChart, BarChart3, Wifi, WifiOff, User, Award, Brain, Calendar, Sun, Cloud, CloudRain, UserCheck, Star, Gift, Sparkles, TrendingDown, Target, CoffeeIcon } from 'lucide-react';

const UltimateCafeSystem = () => {
  // Employee Management
  const [currentEmployee, setCurrentEmployee] = useState({
    id: 1,
    name: 'Maria Garcia',
    role: 'Barista',
    clockedIn: true,
    shiftStart: '08:00',
    salesToday: 0,
    itemsMade: 0,
    avgServiceTime: 0
  });

  const [employees] = useState([
    { id: 1, name: 'Maria Garcia', role: 'Barista', pin: '1234' },
    { id: 2, name: 'Carlos Rodriguez', role: 'Manager', pin: '5678' },
    { id: 3, name: 'Ana Martinez', role: 'Barista', pin: '9012' }
  ]);

  // Customer Loyalty
  const [customerPhone, setCustomerPhone] = useState('');
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [customers] = useState([
    { 
      id: 1, 
      phone: '555-0123', 
      name: 'Juan Pérez', 
      points: 150, 
      visits: 23, 
      favoriteItem: 'Cappuccino',
      avgSpend: 12.50,
      lastVisit: '2025-01-19',
      tier: 'Gold'
    },
    { 
      id: 2, 
      phone: '555-0124', 
      name: 'Sofia Hernández', 
      points: 85, 
      visits: 12, 
      favoriteItem: 'Chai Latte',
      avgSpend: 15.00,
      lastVisit: '2025-01-18',
      tier: 'Silver'
    }
  ]);

  // Product catalog with recipe ingredients
  const [products] = useState([
    {
      id: 1,
      name: 'Café Americano',
      price: 3.5,
      category: 'coffee',
      recipe: [
        { ingredient: 'Coffee Beans', quantity: 0.018, unit: 'kg' },
        { ingredient: 'Cups (12oz)', quantity: 1, unit: 'pcs' }
      ],
      prepTime: 60, // seconds
      points: 5,
      image: '☕'
    },
    {
      id: 2,
      name: 'Cappuccino',
      price: 4.5,
      category: 'coffee',
      recipe: [
        { ingredient: 'Coffee Beans', quantity: 0.016, unit: 'kg' },
        { ingredient: 'Milk', quantity: 0.15, unit: 'L' },
        { ingredient: 'Cups (12oz)', quantity: 1, unit: 'pcs' }
      ],
      prepTime: 120,
      points: 7,
      image: '☕'
    },
    {
      id: 3,
      name: 'Chai Latte',
      price: 5.0,
      category: 'coffee',
      recipe: [
        { ingredient: 'Chai Mix', quantity: 0.025, unit: 'kg' },
        { ingredient: 'Milk', quantity: 0.2, unit: 'L' },
        { ingredient: 'Sugar', quantity: 0.015, unit: 'kg' },
        { ingredient: 'Cups (12oz)', quantity: 1, unit: 'pcs' }
      ],
      prepTime: 90,
      points: 8,
      image: '🍵'
    },
    {
      id: 4,
      name: 'Pan Dulce',
      price: 3.0,
      category: 'food',
      recipe: [
        { ingredient: 'Pastries', quantity: 1, unit: 'pcs' }
      ],
      prepTime: 10,
      points: 5,
      image: '🥐'
    },
    {
      id: 5,
      name: 'Torta de Jamón',
      price: 8.5,
      category: 'food',
      recipe: [
        { ingredient: 'Sandwich Supplies', quantity: 1, unit: 'portion' }
      ],
      prepTime: 180,
      points: 12,
      image: '🥪'
    }
  ]);

  // Real-time inventory
  const [inventory, setInventory] = useState([
    { name: 'Coffee Beans', current: 45, unit: 'kg', costPerUnit: 25, reorderPoint: 10 },
    { name: 'Milk', current: 30, unit: 'L', costPerUnit: 3.5, reorderPoint: 15 },
    { name: 'Sugar', current: 20, unit: 'kg', costPerUnit: 2, reorderPoint: 5 },
    { name: 'Cups (12oz)', current: 500, unit: 'pcs', costPerUnit: 0.15, reorderPoint: 200 },
    { name: 'Chai Mix', current: 10, unit: 'kg', costPerUnit: 35, reorderPoint: 3 },
    { name: 'Pastries', current: 45, unit: 'pcs', costPerUnit: 2.5, reorderPoint: 20 },
    { name: 'Sandwich Supplies', current: 30, unit: 'portion', costPerUnit: 3.5, reorderPoint: 15 }
  ]);

  // AI Predictions
  const [aiPredictions, setAiPredictions] = useState({
    tomorrowSales: 2450,
    tomorrowTransactions: 145,
    peakHours: ['8:00-10:00', '14:00-16:00'],
    weatherImpact: { type: 'rainy', salesBoost: 15 },
    recommendedStaff: {
      morning: 3,
      afternoon: 2,
      evening: 1
    },
    inventoryNeeds: [
      { item: 'Milk', orderBy: 'Tomorrow 3PM', quantity: '40L' },
      { item: 'Coffee Beans', orderBy: 'Wednesday', quantity: '20kg' }
    ],
    promotionSuggestion: {
      item: 'Chai Latte',
      discount: 20,
      reason: 'High margin + rainy weather',
      expectedRevenue: 180
    },
    customerInsights: [
      'Gold tier customers visit 40% more on rainy days',
      '30% of afternoon customers order pastries with coffee',
      'Loyalty program drives 65% of revenue'
    ]
  });

  // POS State
  const [cart, setCart] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [activeTab, setActiveTab] = useState('pos');
  
  // Real-time metrics
  const [todayMetrics, setTodayMetrics] = useState({
    revenue: 1876.50,
    transactions: 98,
    avgTicket: 19.15,
    itemsSold: 156,
    profit: 1245.30,
    topProduct: 'Cappuccino',
    customerSatisfaction: 4.8,
    avgWaitTime: 3.2
  });

  const [employeeMetrics, setEmployeeMetrics] = useState([
    { name: 'Maria Garcia', sales: 890.50, items: 67, avgTime: 2.8, rating: 4.9 },
    { name: 'Carlos Rodriguez', sales: 986.00, items: 89, avgTime: 3.5, rating: 4.7 }
  ]);

  const [liveTransactions, setLiveTransactions] = useState([]);
  const [inventoryAlerts, setInventoryAlerts] = useState([]);
  const [isOnline, setIsOnline] = useState(true);

  // Calculate cart total
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartPoints = cart.reduce((sum, item) => sum + (item.points * item.quantity), 0);

  // Add to cart
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, delta) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  // Apply loyalty discount
  const getLoyaltyDiscount = () => {
    if (!currentCustomer) return 0;
    switch (currentCustomer.tier) {
      case 'Gold': return cartTotal * 0.10; // 10% discount
      case 'Silver': return cartTotal * 0.05; // 5% discount
      default: return 0;
    }
  };

  const finalTotal = cartTotal - getLoyaltyDiscount();

  // Process payment
  const processPayment = (method) => {
    const transaction = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      items: cart,
      subtotal: cartTotal,
      discount: getLoyaltyDiscount(),
      total: finalTotal,
      paymentMethod: method,
      profit: calculateTransactionProfit(),
      employee: currentEmployee.name,
      customer: currentCustomer
    };

    // Update inventory in real-time
    const updatedInventory = [...inventory];
    let inventoryIssues = [];

    cart.forEach(item => {
      item.recipe.forEach(ingredient => {
        const invItem = updatedInventory.find(inv => inv.name === ingredient.ingredient);
        if (invItem) {
          const totalNeeded = ingredient.quantity * item.quantity;
          invItem.current -= totalNeeded;
          
          // Check for low inventory
          if (invItem.current <= invItem.reorderPoint) {
            inventoryIssues.push({
              item: invItem.name,
              current: invItem.current,
              unit: invItem.unit,
              severity: invItem.current <= 0 ? 'critical' : 'warning'
            });
          }
        }
      });
    });

    setInventory(updatedInventory);
    setInventoryAlerts(inventoryIssues);

    // Update live metrics
    setTodayMetrics(prev => ({
      revenue: prev.revenue + finalTotal,
      transactions: prev.transactions + 1,
      avgTicket: ((prev.revenue + finalTotal) / (prev.transactions + 1)),
      itemsSold: prev.itemsSold + cart.reduce((sum, item) => sum + item.quantity, 0),
      profit: prev.profit + transaction.profit,
      topProduct: prev.topProduct, // Would calculate based on frequency
      customerSatisfaction: prev.customerSatisfaction,
      avgWaitTime: prev.avgWaitTime
    }));

    // Update employee metrics
    setCurrentEmployee(prev => ({
      ...prev,
      salesToday: prev.salesToday + finalTotal,
      itemsMade: prev.itemsMade + cart.reduce((sum, item) => sum + item.quantity, 0)
    }));

    // Update customer loyalty
    if (currentCustomer) {
      // Add points
      const newPoints = currentCustomer.points + cartPoints;
      // Update customer data (in real app, this would be API call)
    }

    // Add to live feed
    setLiveTransactions(prev => [transaction, ...prev.slice(0, 9)]);

    // Clear cart and close modal
    setCart([]);
    setCurrentCustomer(null);
    setCustomerPhone('');
    setShowPaymentModal(false);
    setPaymentMethod(null);

    // Simulate cloud sync
    syncToCloud(transaction);
  };

  // Calculate transaction profit
  const calculateTransactionProfit = () => {
    let totalCost = 0;
    
    cart.forEach(item => {
      item.recipe.forEach(ingredient => {
        const invItem = inventory.find(inv => inv.name === ingredient.ingredient);
        if (invItem) {
          totalCost += ingredient.quantity * item.quantity * invItem.costPerUnit;
        }
      });
    });
    
    return finalTotal - totalCost;
  };

  // Simulate cloud sync
  const syncToCloud = (transaction) => {
    setTimeout(() => {
      console.log('Transaction synced to cloud:', transaction);
    }, 1000);
  };

  // Look up customer
  const lookupCustomer = () => {
    const customer = customers.find(c => c.phone === customerPhone);
    if (customer) {
      setCurrentCustomer(customer);
    } else {
      // Create new customer
      setCurrentCustomer({
        id: Date.now(),
        phone: customerPhone,
        name: 'New Customer',
        points: 0,
        visits: 0,
        tier: 'Bronze'
      });
    }
  };

  // Payment Modal
  const PaymentModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-bold mb-4">Payment - ${finalTotal.toFixed(2)}</h3>
        
        {currentCustomer && (
          <div className="bg-purple-50 rounded-lg p-3 mb-4">
            <p className="text-sm font-medium">{currentCustomer.name} - {currentCustomer.tier} Member</p>
            <p className="text-xs text-purple-700">Points: {currentCustomer.points} (+{cartPoints} today)</p>
            {getLoyaltyDiscount() > 0 && (
              <p className="text-sm text-green-600 mt-1">Loyalty Discount: -${getLoyaltyDiscount().toFixed(2)}</p>
            )}
          </div>
        )}
        
        <div className="space-y-3 mb-6">
          <button
            onClick={() => processPayment('card')}
            className="w-full flex items-center justify-center gap-3 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            <CreditCard className="w-5 h-5" />
            Credit/Debit Card
          </button>
          
          <button
            onClick={() => processPayment('cash')}
            className="w-full flex items-center justify-center gap-3 bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition"
          >
            <DollarSign className="w-5 h-5" />
            Cash
          </button>
          
          <button
            onClick={() => processPayment('mobile')}
            className="w-full flex items-center justify-center gap-3 bg-purple-500 text-white py-3 px-4 rounded-lg hover:bg-purple-600 transition"
          >
            <Smartphone className="w-5 h-5" />
            Mobile Payment
          </button>
        </div>
        
        <button
          onClick={() => setShowPaymentModal(false)}
          className="w-full py-2 text-gray-600 hover:text-gray-800 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );

  // Employee Modal
  const EmployeeModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-bold mb-4">Select Employee</h3>
        
        <div className="space-y-3">
          {employees.map(emp => (
            <button
              key={emp.id}
              onClick={() => {
                setCurrentEmployee({
                  ...emp,
                  clockedIn: true,
                  shiftStart: new Date().toLocaleTimeString(),
                  salesToday: 0,
                  itemsMade: 0,
                  avgServiceTime: 0
                });
                setShowEmployeeModal(false);
              }}
              className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <p className="font-medium">{emp.name}</p>
              <p className="text-sm text-gray-600">{emp.role}</p>
            </button>
          ))}
        </div>
        
        <button
          onClick={() => setShowEmployeeModal(false)}
          className="w-full mt-4 py-2 text-gray-600 hover:text-gray-800 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );

  // AI Insights Component
  const AIInsights = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center mb-4">
          <Brain className="w-8 h-8 mr-3" />
          <div>
            <h2 className="text-2xl font-bold">AI Business Intelligence</h2>
            <p className="text-purple-100">Tomorrow's Forecast & Recommendations</p>
          </div>
        </div>
      </div>

      {/* Tomorrow's Predictions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Tomorrow's Revenue</p>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-2xl font-bold">${aiPredictions.tomorrowSales}</p>
          <p className="text-xs text-green-600">+12% vs last Tuesday</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Expected Customers</p>
            <Users className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-2xl font-bold">{aiPredictions.tomorrowTransactions}</p>
          <p className="text-xs text-blue-600">Peak: {aiPredictions.peakHours[0]}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Weather Impact</p>
            <CloudRain className="w-4 h-4 text-gray-500" />
          </div>
          <p className="text-2xl font-bold">+{aiPredictions.weatherImpact.salesBoost}%</p>
          <p className="text-xs text-gray-600">Rainy day boost</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Profit Margin</p>
            <Target className="w-4 h-4 text-purple-500" />
          </div>
          <p className="text-2xl font-bold">68.5%</p>
          <p className="text-xs text-purple-600">2.3% above target</p>
        </div>
      </div>

      {/* Staff Recommendations */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <UserCheck className="w-5 h-5 mr-2 text-blue-600" />
          Optimal Staffing for Tomorrow
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Morning (7-12)</p>
            <p className="text-2xl font-bold text-blue-600">{aiPredictions.recommendedStaff.morning}</p>
            <p className="text-xs">High rush expected</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600">Afternoon (12-5)</p>
            <p className="text-2xl font-bold text-green-600">{aiPredictions.recommendedStaff.afternoon}</p>
            <p className="text-xs">Normal flow</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600">Evening (5-9)</p>
            <p className="text-2xl font-bold text-purple-600">{aiPredictions.recommendedStaff.evening}</p>
            <p className="text-xs">Light traffic</p>
          </div>
        </div>
      </div>

      {/* Inventory Predictions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Package className="w-5 h-5 mr-2 text-orange-600" />
          Inventory Action Items
        </h3>
        <div className="space-y-3">
          {aiPredictions.inventoryNeeds.map((need, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div>
                <p className="font-medium">{need.item}</p>
                <p className="text-sm text-gray-600">Order by: {need.orderBy}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">{need.quantity}</p>
                <button className="text-xs text-orange-600 hover:text-orange-800">Auto-order →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promotion Suggestion */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-green-600" />
          AI-Recommended Promotion
        </h3>
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-semibold text-lg">{aiPredictions.promotionSuggestion.item}</p>
              <p className="text-sm text-gray-600">{aiPredictions.promotionSuggestion.discount}% off tomorrow</p>
            </div>
            <div className="text-3xl">🍵</div>
          </div>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Why:</strong> {aiPredictions.promotionSuggestion.reason}
          </p>
          <p className="text-sm">
            <strong>Expected additional revenue:</strong> 
            <span className="text-green-600 font-bold"> ${aiPredictions.promotionSuggestion.expectedRevenue}</span>
          </p>
          <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Activate Promotion
          </button>
        </div>
      </div>

      {/* Customer Insights */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-purple-600" />
          Customer Behavior Insights
        </h3>
        <div className="space-y-3">
          {aiPredictions.customerInsights.map((insight, idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Analytics Dashboard
  const AnalyticsDashboard = () => (
    <div className="space-y-6">
      {/* Employee Performance */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Employee Performance Today</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr className="text-left text-sm text-gray-600">
                <th className="pb-3">Employee</th>
                <th className="pb-3">Sales</th>
                <th className="pb-3">Items</th>
                <th className="pb-3">Avg Time</th>
                <th className="pb-3">Rating</th>
              </tr>
            </thead>
            <tbody>
              {employeeMetrics.map((emp, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-3 font-medium">{emp.name}</td>
                  <td className="py-3">${emp.sales.toFixed(2)}</td>
                  <td className="py-3">{emp.items}</td>
                  <td className="py-3">{emp.avgTime} min</td>
                  <td className="py-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(emp.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="ml-1 text-sm">{emp.rating}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Loyalty Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold mb-3">Loyalty Program Stats</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Total Members</span>
              <span className="font-bold">487</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Active Today</span>
              <span className="font-bold text-green-600">67</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Points Earned</span>
              <span className="font-bold">1,245</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold mb-3">Member Tiers</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">🥇 Gold</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <span className="text-sm">73</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">🥈 Silver</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <span className="text-sm">169</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">🥉 Bronze</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <span className="text-sm">245</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold mb-3">Loyalty Revenue Impact</h4>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">65%</p>
            <p className="text-sm text-gray-600 mt-1">of today's revenue from members</p>
            <p className="text-xs text-gray-500 mt-2">$1,219.73 from loyalty customers</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">POS System</h1>
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${isOnline ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {isOnline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
                {isOnline ? 'Online' : 'Offline Mode'}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setShowEmployeeModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                <User className="w-4 h-4" />
                <span className="text-sm">{currentEmployee.name}</span>
              </button>
              <div className="text-right">
                <p className="text-sm text-gray-600">Today's Revenue</p>
                <p className="text-2xl font-bold text-green-600">${todayMetrics.revenue.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-6 mt-4 border-t pt-4">
            <button
              onClick={() => setActiveTab('pos')}
              className={`pb-2 px-1 border-b-2 transition ${activeTab === 'pos' ? 'border-blue-600 text-blue-600' : 'border-transparent'}`}
            >
              Point of Sale
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`pb-2 px-1 border-b-2 transition ${activeTab === 'ai' ? 'border-purple-600 text-purple-600' : 'border-transparent'}`}
            >
              AI Insights
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`pb-2 px-1 border-b-2 transition ${activeTab === 'analytics' ? 'border-green-600 text-green-600' : 'border-transparent'}`}
            >
              Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'pos' && (
        <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Product Grid */}
          <div className="lg:col-span-2 space-y-6">
            {/* Real-time Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">Transactions</p>
                    <p className="text-xl font-bold">{todayMetrics.transactions}</p>
                  </div>
                  <Activity className="w-8 h-8 text-blue-500 opacity-20" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">Avg Ticket</p>
                    <p className="text-xl font-bold">${todayMetrics.avgTicket.toFixed(2)}</p>
                  </div>
                  <ShoppingCart className="w-8 h-8 text-purple-500 opacity-20" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">Satisfaction</p>
                    <p className="text-xl font-bold">⭐ {todayMetrics.customerSatisfaction}</p>
                  </div>
                  <Star className="w-8 h-8 text-yellow-500 opacity-20" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">Wait Time</p>
                    <p className="text-xl font-bold">{todayMetrics.avgWaitTime} min</p>
                  </div>
                  <Clock className="w-8 h-8 text-green-500 opacity-20" />
                </div>
              </div>
            </div>

            {/* Inventory Alerts */}
            {inventoryAlerts.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  <h3 className="font-semibold text-red-800">Inventory Alerts</h3>
                </div>
                <div className="space-y-1">
                  {inventoryAlerts.map((alert, idx) => (
                    <p key={idx} className="text-sm text-red-700">
                      {alert.severity === 'critical' ? '⚠️ CRITICAL: ' : '⚡ Low Stock: '}
                      {alert.item} - Only {alert.current.toFixed(2)} {alert.unit} left
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Products */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {products.map(product => (
                  <button
                    key={product.id}
                    onClick={() => addToCart(product)}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition text-center"
                  >
                    <div className="text-3xl mb-2">{product.image}</div>
                    <p className="font-medium text-sm">{product.name}</p>
                    <p className="text-lg font-bold text-green-600">${product.price}</p>
                    <p className="text-xs text-gray-500">{product.points} pts</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cart & Customer */}
          <div className="space-y-6">
            {/* Customer Lookup */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Customer Loyalty</h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Phone number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-lg"
                  />
                  <button
                    onClick={lookupCustomer}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    Lookup
                  </button>
                </div>
                
                {currentCustomer && (
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="font-medium">{currentCustomer.name}</p>
                    <p className="text-sm text-purple-700">{currentCustomer.tier} • {currentCustomer.points} points</p>
                    <p className="text-xs text-gray-600">Favorite: {currentCustomer.favoriteItem}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Cart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Current Order</h2>
              
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Cart is empty</p>
              ) : (
                <>
                  <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between py-2 border-b">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-gray-600">${item.price} • {item.points} pts</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                      {getLoyaltyDiscount() > 0 && (
                        <div className="flex justify-between text-sm text-green-600">
                          <span>Loyalty Discount</span>
                          <span>-${getLoyaltyDiscount().toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span>Points Earned</span>
                        <span className="text-purple-600">+{cartPoints}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mb-4 pt-2 border-t">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold text-green-600">${finalTotal.toFixed(2)}</span>
                    </div>
                    
                    <button
                      onClick={() => setShowPaymentModal(true)}
                      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
                    >
                      Process Payment
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Employee Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">My Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Sales Today</span>
                  <span className="font-bold">${currentEmployee.salesToday.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Items Made</span>
                  <span className="font-bold">{currentEmployee.itemsMade}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Shift Started</span>
                  <span className="font-bold">{currentEmployee.shiftStart}</span>
                </div>
              </div>
            </div>

            {/* Live Transaction Feed */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                <h2 className="text-lg font-semibold">Live Feed</h2>
              </div>
              
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {liveTransactions.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No transactions yet</p>
                ) : (
                  liveTransactions.map(transaction => (
                    <div key={transaction.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-medium">${transaction.total.toFixed(2)}</span>
                        <span className="text-xs text-gray-500">
                          {new Date(transaction.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600">
                        {transaction.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">
                          {transaction.employee}
                        </span>
                        {transaction.customer && (
                          <span className="text-xs text-purple-600">
                            {transaction.customer.name}
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'ai' && (
        <div className="max-w-7xl mx-auto p-4">
          <AIInsights />
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="max-w-7xl mx-auto p-4">
          <AnalyticsDashboard />
        </div>
      )}

      {/* Modals */}
      {showPaymentModal && <PaymentModal />}
      {showEmployeeModal && <EmployeeModal />}
    </div>
  );
};

export default UltimateCafeSystem;