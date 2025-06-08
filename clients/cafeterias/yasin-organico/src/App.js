import React, { useState, useEffect, useMemo } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, Package, DollarSign, ShoppingCart, AlertTriangle, Users, Coffee, Calculator, Brain, Calendar, FileText, Settings, Home, ChefHat, Truck, CreditCard } from 'lucide-react';

const CafeManagementSystem = () => {
  // Core state management
  const [activeTab, setActiveTab] = useState('dashboard');
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Coffee Beans', unit: 'kg', current: 45, optimal: 50, cost: 25, supplier: 'Bean Co.', lastOrder: '2025-01-15' },
    { id: 2, name: 'Milk', unit: 'L', current: 30, optimal: 40, cost: 3.5, supplier: 'Dairy Fresh', lastOrder: '2025-01-18' },
    { id: 3, name: 'Sugar', unit: 'kg', current: 20, optimal: 25, cost: 2, supplier: 'Sweet Supply', lastOrder: '2025-01-10' },
    { id: 4, name: 'Cups (12oz)', unit: 'pcs', current: 500, optimal: 1000, cost: 0.15, supplier: 'Pack Pro', lastOrder: '2025-01-12' },
    { id: 5, name: 'Pastries', unit: 'pcs', current: 45, optimal: 60, cost: 2.5, supplier: 'Local Bakery', lastOrder: '2025-01-19' }
  ]);

  const [sales, setSales] = useState([
    { date: '2025-01-13', total: 1250, transactions: 85, avgTicket: 14.7 },
    { date: '2025-01-14', total: 1380, transactions: 92, avgTicket: 15.0 },
    { date: '2025-01-15', total: 1520, transactions: 98, avgTicket: 15.5 },
    { date: '2025-01-16', total: 1290, transactions: 88, avgTicket: 14.7 },
    { date: '2025-01-17', total: 1680, transactions: 105, avgTicket: 16.0 },
    { date: '2025-01-18', total: 1890, transactions: 112, avgTicket: 16.9 },
    { date: '2025-01-19', total: 2100, transactions: 120, avgTicket: 17.5 }
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: 'Café Americano', price: 3.5, cost: 0.8, sold: 245 },
    { id: 2, name: 'Cappuccino', price: 4.5, cost: 1.2, sold: 189 },
    { id: 3, name: 'Chai Latte', price: 5.0, cost: 1.5, sold: 312 },
    { id: 4, name: 'Pan Dulce', price: 3.0, cost: 1.0, sold: 156 },
    { id: 5, name: 'Torta de Jamón', price: 8.5, cost: 3.5, sold: 98 }
  ]);

  const [expenses, setExpenses] = useState([
    { category: 'Rent', amount: 3500, type: 'fixed' },
    { category: 'Salaries', amount: 8500, type: 'fixed' },
    { category: 'Utilities', amount: 850, type: 'variable' },
    { category: 'Supplies', amount: 2200, type: 'variable' },
    { category: 'Marketing', amount: 500, type: 'variable' }
  ]);

  // AI Predictions and Analytics
  const [aiPredictions, setAiPredictions] = useState({
    nextWeekSales: 12500,
    inventoryAlerts: ['Coffee Beans running low - order by Jan 22', 'Cups below optimal - consider bulk order'],
    peakHours: ['8-10 AM', '2-4 PM'],
    recommendedActions: [
      'Increase pastry orders for weekend rush',
      'Consider promotional offer on slow Tuesday afternoons',
      'Staff scheduling optimization: Add 1 barista during morning peak'
    ]
  });

  // Calculate key metrics
  const totalRevenue = sales.reduce((sum, day) => sum + day.total, 0);
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const netProfit = totalRevenue - totalExpenses;
  const profitMargin = ((netProfit / totalRevenue) * 100).toFixed(2);

  // Prepare chart data
  const salesChartData = sales.map(day => ({
    date: day.date.slice(5),
    revenue: day.total,
    transactions: day.transactions
  }));

  const productPerfData = products.map(p => ({
    name: p.name,
    revenue: p.price * p.sold,
    profit: (p.price - p.cost) * p.sold,
    margin: (((p.price - p.cost) / p.price) * 100).toFixed(1)
  }));

  const expenseData = expenses.map(e => ({
    name: e.category,
    value: e.amount
  }));

  const COLORS = ['#8B4513', '#D2691E', '#A0522D', '#CD853F', '#DEB887'];

  // Tab Components
  const Dashboard = () => (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
              <p className="text-green-500 text-sm flex items-center mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12.5% vs last week
              </p>
            </div>
            <DollarSign className="w-10 h-10 text-green-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Net Profit</p>
              <p className="text-2xl font-bold">${netProfit.toLocaleString()}</p>
              <p className="text-blue-500 text-sm">{profitMargin}% margin</p>
            </div>
            <Calculator className="w-10 h-10 text-blue-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Avg Transaction</p>
              <p className="text-2xl font-bold">${sales[sales.length-1].avgTicket}</p>
              <p className="text-purple-500 text-sm flex items-center mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8% this week
              </p>
            </div>
            <ShoppingCart className="w-10 h-10 text-purple-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Transactions</p>
              <p className="text-2xl font-bold">{sales.reduce((sum, day) => sum + day.transactions, 0)}</p>
              <p className="text-orange-500 text-sm">This week</p>
            </div>
            <Users className="w-10 h-10 text-orange-500 opacity-20" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={salesChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#8B4513" fill="#D2691E" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: $${entry.value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Brain className="w-6 h-6 text-purple-600 mr-2" />
          <h3 className="text-lg font-semibold">AI Insights & Predictions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">Next Week Revenue Forecast</p>
            <p className="text-2xl font-bold text-purple-600">${aiPredictions.nextWeekSales.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Peak Hours</p>
            <p className="font-semibold">{aiPredictions.peakHours.join(', ')}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">Recommended Actions</p>
          <ul className="space-y-1">
            {aiPredictions.recommendedActions.map((action, idx) => (
              <li key={idx} className="text-sm flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                {action}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const InventoryManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Inventory Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Add Item
        </button>
      </div>

      {/* Alerts */}
      {aiPredictions.inventoryAlerts.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
            <h3 className="font-semibold text-yellow-800">Inventory Alerts</h3>
          </div>
          <ul className="space-y-1">
            {aiPredictions.inventoryAlerts.map((alert, idx) => (
              <li key={idx} className="text-sm text-yellow-700">{alert}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Inventory Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Optimal Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Cost</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventory.map((item) => {
              const stockPercentage = (item.current / item.optimal) * 100;
              const status = stockPercentage < 50 ? 'low' : stockPercentage < 80 ? 'medium' : 'good';
              
              return (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.current} {item.unit}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.optimal} {item.unit}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${item.cost}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.supplier}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      status === 'low' ? 'bg-red-100 text-red-800' :
                      status === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {status === 'low' ? 'Low Stock' : status === 'medium' ? 'Medium' : 'Good'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Order</button>
                    <button className="text-gray-600 hover:text-gray-900">Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const ProfitLoss = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Profit & Loss Statement</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 rounded-xl p-6">
          <p className="text-sm text-gray-600">Total Revenue</p>
          <p className="text-3xl font-bold text-green-600">${totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-red-50 rounded-xl p-6">
          <p className="text-sm text-gray-600">Total Expenses</p>
          <p className="text-3xl font-bold text-red-600">${totalExpenses.toLocaleString()}</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6">
          <p className="text-sm text-gray-600">Net Profit</p>
          <p className="text-3xl font-bold text-blue-600">${netProfit.toLocaleString()}</p>
          <p className="text-sm text-gray-600 mt-1">Margin: {profitMargin}%</p>
        </div>
      </div>

      {/* Product Performance */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Product Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productPerfData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8B4513" name="Revenue" />
            <Bar dataKey="profit" fill="#D2691E" name="Profit" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed P&L Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">% of Revenue</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="font-semibold bg-green-50">
              <td className="px-6 py-4">Total Revenue</td>
              <td className="px-6 py-4 text-right">${totalRevenue.toLocaleString()}</td>
              <td className="px-6 py-4 text-right">100%</td>
            </tr>
            {expenses.map((expense, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4">{expense.category}</td>
                <td className="px-6 py-4 text-right">${expense.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-right">{((expense.amount / totalRevenue) * 100).toFixed(1)}%</td>
              </tr>
            ))}
            <tr className="font-semibold bg-blue-50">
              <td className="px-6 py-4">Net Profit</td>
              <td className="px-6 py-4 text-right">${netProfit.toLocaleString()}</td>
              <td className="px-6 py-4 text-right">{profitMargin}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const AIAssistant = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">AI Business Assistant</h2>
      
      <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <Brain className="w-8 h-8 text-purple-600 mr-3" />
          <div>
            <h3 className="text-lg font-semibold">Intelligent Insights</h3>
            <p className="text-sm text-gray-600">AI-powered recommendations for your café</p>
          </div>
        </div>
      </div>

      {/* Predictive Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue Forecast</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Next 7 Days</p>
              <p className="text-2xl font-bold text-green-600">${aiPredictions.nextWeekSales.toLocaleString()}</p>
              <p className="text-sm text-green-500">↑ 15% from last week</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Next 30 Days</p>
              <p className="text-xl font-bold">${(aiPredictions.nextWeekSales * 4.3).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Customer Patterns</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Peak Hours:</span>
              <span className="font-semibold text-sm">{aiPredictions.peakHours.join(', ')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Busiest Day:</span>
              <span className="font-semibold text-sm">Saturday</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Avg Wait Time:</span>
              <span className="font-semibold text-sm">3.5 minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Recommended Actions</h3>
        <div className="space-y-3">
          {aiPredictions.recommendedActions.map((action, idx) => (
            <div key={idx} className="flex items-start p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                <span className="text-purple-600 font-semibold text-sm">{idx + 1}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm">{action}</p>
                <button className="text-xs text-purple-600 hover:text-purple-800 mt-1">View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Interface */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Ask Your AI Assistant</h3>
        <div className="space-y-3">
          <div className="bg-gray-100 rounded-lg p-3">
            <p className="text-sm text-gray-600">Example questions:</p>
            <ul className="text-sm mt-2 space-y-1">
              <li>• What's my best performing product this month?</li>
              <li>• How can I reduce my operating costs?</li>
              <li>• When should I schedule more staff?</li>
              <li>• What promotions should I run next week?</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Ask anything about your café..." 
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Ask AI
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Navigation
  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'inventory', name: 'Inventory', icon: Package },
    { id: 'profit-loss', name: 'Profit & Loss', icon: Calculator },
    { id: 'ai-assistant', name: 'AI Assistant', icon: Brain },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              {/* Logo Section */}
              <div className="flex items-center border-r-2 border-gray-800 pr-4 mr-4">
                <span className="text-3xl font-light tracking-wider">CAFÉ</span>
              </div>
              <div className="flex items-center">
                {/* Yasin Logo SVG */}
                <svg className="w-14 h-14 mr-3" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer circle */}
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                  
                  {/* Top geometric pattern */}
                  <path d="M50 15 L35 25 L50 35 L65 25 Z" fill="currentColor" className="text-gray-900"/>
                  <path d="M50 20 L40 27 L50 32 L60 27 Z" fill="white"/>
                  
                  {/* Left geometric pattern */}
                  <path d="M25 40 L25 60 L35 65 L35 45 Z" fill="currentColor" className="text-gray-900"/>
                  <path d="M28 45 L28 58 L33 60 L33 47 Z" fill="white"/>
                  
                  {/* Right geometric pattern */}
                  <path d="M75 40 L65 45 L65 65 L75 60 Z" fill="currentColor" className="text-gray-900"/>
                  <path d="M72 45 L67 47 L67 60 L72 58 Z" fill="white"/>
                  
                  {/* Center Y shape */}
                  <path d="M50 38 L40 50 L40 70 L45 70 L45 55 L50 50 L55 55 L55 70 L60 70 L60 50 Z" 
                        fill="currentColor" className="text-gray-900"/>
                </svg>
                <div>
                  <span className="text-2xl font-bold block leading-none">yasin</span>
                  <span className="text-xs text-gray-600 tracking-widest">-orgánico-</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-600 hidden md:block">Management System</span>
              <span className="text-sm text-gray-500">Last sync: 2 min ago</span>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="fixed top-20 left-0 right-0 bg-white border-b shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-3 py-4 text-sm font-medium border-b-3 transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content with padding for fixed header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'inventory' && <InventoryManagement />}
        {activeTab === 'profit-loss' && <ProfitLoss />}
        {activeTab === 'ai-assistant' && <AIAssistant />}
      </main>
    </div>
  );
};

export default CafeManagementSystem;