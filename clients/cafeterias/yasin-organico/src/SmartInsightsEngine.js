// src/SmartInsightsEngine.js
import React, { useState, useEffect } from 'react';
import { AlertTriangle, TrendingUp, Calendar, DollarSign, Package, Brain, Coffee, Users, ChefHat, Zap, Target, Clock, ShoppingCart, Send, CheckCircle, Truck, Phone, Mail, MessageSquare, CreditCard, Bell, TrendingDown, BarChart3, Star, AlertCircle, FileText, Download } from 'lucide-react';

const SmartInsightsEngine = () => {
  // Enhanced data with supplier information
  const [inventoryData, setInventoryData] = useState([
    { 
      id: 1, 
      name: 'Coffee Beans', 
      unit: 'kg', 
      current: 45, 
      optimal: 50, 
      cost: 25, 
      supplier: 'Bean Co.', 
      supplierEmail: 'orders@beanco.com',
      supplierPhone: '+52 55 1234 5678',
      supplierWhatsApp: '+52 55 1234 5678',
      avgDailyUsage: 3.5, 
      leadTime: 3,
      minOrderQty: 10,
      bulkDiscount: { qty: 50, discount: 10 },
      paymentTerms: 'Net 30',
      lastDeliveryRating: 5
    },
    { 
      id: 2, 
      name: 'Milk', 
      unit: 'L', 
      current: 30, 
      optimal: 40, 
      cost: 3.5, 
      supplier: 'Dairy Fresh',
      supplierEmail: 'pedidos@dairyfresh.mx',
      supplierPhone: '+52 55 2345 6789',
      supplierWhatsApp: '+52 55 2345 6789',
      avgDailyUsage: 5, 
      leadTime: 1,
      minOrderQty: 20,
      bulkDiscount: { qty: 100, discount: 5 },
      paymentTerms: 'COD',
      lastDeliveryRating: 4
    },
    { 
      id: 3, 
      name: 'Sugar', 
      unit: 'kg', 
      current: 20, 
      optimal: 25, 
      cost: 2, 
      supplier: 'Sweet Supply',
      supplierEmail: 'ventas@sweetsupply.com',
      supplierPhone: '+52 55 3456 7890',
      supplierWhatsApp: '+52 55 3456 7890',
      avgDailyUsage: 1.2, 
      leadTime: 2,
      minOrderQty: 25,
      bulkDiscount: { qty: 100, discount: 8 },
      paymentTerms: 'Net 15',
      lastDeliveryRating: 5
    },
    { 
      id: 4, 
      name: 'Cups (12oz)', 
      unit: 'pcs', 
      current: 500, 
      optimal: 1000, 
      cost: 0.15, 
      supplier: 'Pack Pro',
      supplierEmail: 'orders@packpro.mx',
      supplierPhone: '+52 55 4567 8901',
      supplierWhatsApp: '+52 55 4567 8901',
      avgDailyUsage: 80, 
      leadTime: 4,
      minOrderQty: 500,
      bulkDiscount: { qty: 5000, discount: 15 },
      paymentTerms: 'Net 45',
      lastDeliveryRating: 3
    },
  ]);

  const [supplierPerformance, setSupplierPerformance] = useState([
    {
      supplier: 'Bean Co.',
      onTimeDelivery: 95,
      avgDeliveryTime: 2.8,
      qualityRating: 4.8,
      responseTime: '2 hours',
      totalOrders: 45,
      totalSpent: 12500,
      lastIssue: null
    },
    {
      supplier: 'Dairy Fresh',
      onTimeDelivery: 88,
      avgDeliveryTime: 1.2,
      qualityRating: 4.5,
      responseTime: '30 min',
      totalOrders: 120,
      totalSpent: 8400,
      lastIssue: '2 days late - Jan 10'
    },
    {
      supplier: 'Sweet Supply',
      onTimeDelivery: 92,
      avgDeliveryTime: 2.1,
      qualityRating: 4.9,
      responseTime: '1 hour',
      totalOrders: 23,
      totalSpent: 3200,
      lastIssue: null
    },
    {
      supplier: 'Pack Pro',
      onTimeDelivery: 78,
      avgDeliveryTime: 4.5,
      qualityRating: 3.8,
      responseTime: '4 hours',
      totalOrders: 18,
      totalSpent: 2700,
      lastIssue: 'Wrong quantity - Jan 5'
    }
  ]);

  const [paymentTracking, setPaymentTracking] = useState([
    {
      id: 1,
      supplier: 'Bean Co.',
      invoiceNo: 'INV-2025-001',
      amount: 500,
      dueDate: '2025-02-15',
      status: 'pending',
      daysUntilDue: 5
    },
    {
      id: 2,
      supplier: 'Sweet Supply',
      invoiceNo: 'INV-2025-002',
      amount: 200,
      dueDate: '2025-02-08',
      status: 'overdue',
      daysOverdue: 2
    },
    {
      id: 3,
      supplier: 'Dairy Fresh',
      invoiceNo: 'INV-2025-003',
      amount: 140,
      dueDate: '2025-01-20',
      status: 'paid',
      paidDate: '2025-01-19'
    }
  ]);

  const [deliveryNotifications, setDeliveryNotifications] = useState([
    {
      id: 1,
      type: 'delivery',
      message: 'Coffee Beans delivery arriving today at 2 PM',
      time: '10 min ago',
      read: false,
      urgent: true
    },
    {
      id: 2,
      type: 'delay',
      message: 'Cups delivery delayed by 1 day due to traffic',
      time: '2 hours ago',
      read: false,
      urgent: true
    },
    {
      id: 3,
      type: 'confirmation',
      message: 'Milk order confirmed for tomorrow morning',
      time: 'Yesterday',
      read: true,
      urgent: false
    }
  ]);

  const [salesHistory] = useState([
    { date: '2025-01-13', total: 1250, transactions: 85, weather: 'sunny', temp: 22 },
    { date: '2025-01-14', total: 1380, transactions: 92, weather: 'cloudy', temp: 20 },
    { date: '2025-01-15', total: 1520, transactions: 98, weather: 'rainy', temp: 18 },
    { date: '2025-01-16', total: 1290, transactions: 88, weather: 'sunny', temp: 24 },
    { date: '2025-01-17', total: 1680, transactions: 105, weather: 'cloudy', temp: 21 },
    { date: '2025-01-18', total: 1890, transactions: 112, weather: 'rainy', temp: 17 },
    { date: '2025-01-19', total: 2100, transactions: 120, weather: 'sunny', temp: 23 }
  ]);

  const [insights, setInsights] = useState([]);
  const [urgentActions, setUrgentActions] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [orderHistory, setOrderHistory] = useState([
    { id: 1, date: '2025-01-15', supplier: 'Bean Co.', items: 'Coffee Beans - 20kg', total: 500, status: 'delivered', rating: 5, onTime: true },
    { id: 2, date: '2025-01-18', supplier: 'Dairy Fresh', items: 'Milk - 40L', total: 140, status: 'delivered', rating: 4, onTime: false },
  ]);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [activeTab, setActiveTab] = useState('insights');

  // Insight Generation Algorithm
  useEffect(() => {
    generateInsights();
  }, [inventoryData]);

  const calculateOptimalOrderQty = (item) => {
    const baseOrderQty = item.optimal - item.current;
    const weeklyUsage = item.avgDailyUsage * 7;
    const bulkThreshold = item.bulkDiscount.qty;
    
    // If close to bulk discount threshold, suggest bulk order
    if (baseOrderQty < bulkThreshold && baseOrderQty > bulkThreshold * 0.7) {
      return {
        qty: bulkThreshold,
        savings: (bulkThreshold * item.cost * item.bulkDiscount.discount / 100).toFixed(2),
        recommendBulk: true
      };
    }
    
    // Otherwise, order for 2 weeks supply
    return {
      qty: Math.max(baseOrderQty, weeklyUsage * 2),
      savings: 0,
      recommendBulk: false
    };
  };

  const generateInsights = () => {
    const newInsights = [];
    const newUrgentActions = [];
    const newOpportunities = [];

    // 1. Enhanced Inventory Predictions with Auto-Order
    inventoryData.forEach(item => {
      const daysUntilStockout = item.current / item.avgDailyUsage;
      const reorderPoint = item.avgDailyUsage * (item.leadTime + 2); // 2 days safety stock
      const optimalOrder = calculateOptimalOrderQty(item);
      
      if (daysUntilStockout <= item.leadTime + 1) {
        newUrgentActions.push({
          type: 'inventory',
          priority: 'high',
          title: `${item.name} Critical Stock Alert`,
          message: `Only ${daysUntilStockout.toFixed(1)} days of stock left. Order NOW to avoid stockout!`,
          action: `Order ${optimalOrder.qty.toFixed(0)} ${item.unit} from ${item.supplier}`,
          actionDetails: {
            item: item,
            orderQty: optimalOrder.qty,
            totalCost: (optimalOrder.qty * item.cost).toFixed(2),
            savings: optimalOrder.savings
          },
          icon: AlertTriangle,
          color: 'red',
          autoOrderAvailable: true
        });
      } else if (item.current <= reorderPoint) {
        newInsights.push({
          type: 'inventory',
          priority: 'medium',
          title: `Reorder ${item.name}`,
          message: `Stock at ${((item.current/item.optimal)*100).toFixed(0)}%. Order in next 2 days.`,
          action: `Contact ${item.supplier} for ${optimalOrder.qty.toFixed(0)} ${item.unit}`,
          actionDetails: {
            item: item,
            orderQty: optimalOrder.qty,
            totalCost: (optimalOrder.qty * item.cost).toFixed(2),
            savings: optimalOrder.savings
          },
          icon: Package,
          color: 'yellow',
          autoOrderAvailable: true
        });
      }

      // Bulk order opportunities
      if (optimalOrder.recommendBulk) {
        newOpportunities.push({
          type: 'bulk-savings',
          title: `Save $${optimalOrder.savings} on ${item.name}`,
          message: `Order ${item.bulkDiscount.qty} ${item.unit} to get ${item.bulkDiscount.discount}% discount`,
          action: 'Set up recurring bulk order',
          icon: DollarSign,
          color: 'green'
        });
      }
    });

    // 2. Payment Alerts
    paymentTracking.forEach(payment => {
      if (payment.status === 'overdue') {
        newUrgentActions.push({
          type: 'payment',
          priority: 'high',
          title: `Overdue Payment Alert`,
          message: `${payment.supplier} invoice ${payment.daysOverdue} days overdue`,
          action: `Pay $${payment.amount} immediately to maintain good relationship`,
          icon: CreditCard,
          color: 'red',
          paymentDetails: payment
        });
      } else if (payment.status === 'pending' && payment.daysUntilDue <= 3) {
        newInsights.push({
          type: 'payment',
          priority: 'medium',
          title: `Payment Due Soon`,
          message: `${payment.supplier} payment due in ${payment.daysUntilDue} days`,
          action: `Prepare $${payment.amount} payment`,
          icon: CreditCard,
          color: 'yellow',
          paymentDetails: payment
        });
      }
    });

    // 3. Supplier Performance Insights
    supplierPerformance.forEach(supplier => {
      if (supplier.onTimeDelivery < 85) {
        newOpportunities.push({
          type: 'supplier',
          title: `Consider Alternative to ${supplier.supplier}`,
          message: `Only ${supplier.onTimeDelivery}% on-time delivery rate`,
          action: 'Research backup suppliers or negotiate service improvement',
          icon: Truck,
          color: 'yellow'
        });
      }
      if (supplier.qualityRating >= 4.8 && supplier.totalOrders > 20) {
        newOpportunities.push({
          type: 'supplier',
          title: `Negotiate Better Terms with ${supplier.supplier}`,
          message: `Excellent ${supplier.qualityRating}★ rating with ${supplier.totalOrders} orders`,
          action: 'Request volume discount or extended payment terms',
          icon: Star,
          color: 'green'
        });
      }
    });

    // 4. Weather-based inventory
    const rainyDays = salesHistory.filter(d => d.weather === 'rainy');
    const sunnyDays = salesHistory.filter(d => d.weather === 'sunny');
    const rainyAvg = rainyDays.reduce((sum, d) => sum + d.total, 0) / rainyDays.length;
    const sunnyAvg = sunnyDays.reduce((sum, d) => sum + d.total, 0) / sunnyDays.length;
    
    if (rainyAvg > sunnyAvg * 1.15) {
      newOpportunities.push({
        type: 'weather',
        title: 'Rainy Day Revenue Boost',
        message: `Sales are ${((rainyAvg/sunnyAvg - 1) * 100).toFixed(0)}% higher on rainy days!`,
        action: 'Stock extra milk & chocolate for hot drinks when rain forecasted',
        icon: Coffee,
        color: 'blue'
      });
    }

    setInsights(newInsights);
    setUrgentActions(newUrgentActions);
    setOpportunities(newOpportunities);
  };

  // Auto-order function
  const createAutoOrder = (actionDetails) => {
    const order = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      supplier: actionDetails.item.supplier,
      items: `${actionDetails.item.name} - ${actionDetails.orderQty} ${actionDetails.item.unit}`,
      total: parseFloat(actionDetails.totalCost),
      status: 'pending',
      item: actionDetails.item,
      qty: actionDetails.orderQty,
      estimatedDelivery: new Date(Date.now() + actionDetails.item.leadTime * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };
    
    setPendingOrders([...pendingOrders, order]);
    setSelectedOrder(order);
    setShowOrderModal(true);
  };

  // Order confirmation modal
  const OrderModal = () => {
    if (!selectedOrder) return null;

    const sendOrder = (method) => {
      // In production, this would actually send the order
      const updatedOrder = { ...selectedOrder, status: 'confirmed', method: method };
      setPendingOrders(pendingOrders.filter(o => o.id !== selectedOrder.id));
      setOrderHistory([updatedOrder, ...orderHistory]);
      
      // Create payment tracking
      const newPayment = {
        id: Date.now(),
        supplier: selectedOrder.supplier,
        invoiceNo: `INV-2025-${String(paymentTracking.length + 1).padStart(3, '0')}`,
        amount: selectedOrder.total,
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: 'pending',
        daysUntilDue: 30
      };
      setPaymentTracking([...paymentTracking, newPayment]);
      
      // Add delivery notification
      const newNotification = {
        id: Date.now(),
        type: 'confirmation',
        message: `${selectedOrder.items} order confirmed with ${selectedOrder.supplier}`,
        time: 'Just now',
        read: false,
        urgent: false
      };
      setDeliveryNotifications([newNotification, ...deliveryNotifications]);
      
      // Update inventory to reflect pending order
      setInventoryData(inventoryData.map(item => 
        item.id === selectedOrder.item.id 
          ? { ...item, current: item.current + selectedOrder.qty }
          : item
      ));
      
      setShowOrderModal(false);
      setSelectedOrder(null);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
          <h3 className="text-xl font-bold mb-4">Confirm Order</h3>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="font-semibold">{selectedOrder.items}</p>
            <p className="text-sm text-gray-600 mt-1">Supplier: {selectedOrder.supplier}</p>
            <p className="text-sm text-gray-600">Total: ${selectedOrder.total}</p>
            <p className="text-sm text-gray-600">Delivery by: {selectedOrder.estimatedDelivery}</p>
            <p className="text-sm text-gray-600">Payment Terms: {selectedOrder.item.paymentTerms}</p>
          </div>

          <p className="text-sm text-gray-700 mb-4">Choose how to send this order:</p>
          
          <div className="grid grid-cols-1 gap-2 mb-4">
            <button
              onClick={() => sendOrder('whatsapp')}
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              <MessageSquare className="w-5 h-5" />
              Send via WhatsApp
            </button>
            
            <button
              onClick={() => sendOrder('email')}
              className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              <Mail className="w-5 h-5" />
              Send via Email
            </button>
            
            <button
              onClick={() => sendOrder('call')}
              className="flex items-center justify-center gap-2 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition"
            >
              <Phone className="w-5 h-5" />
              Call Supplier
            </button>
          </div>
          
          <button
            onClick={() => setShowOrderModal(false)}
            className="w-full py-2 text-gray-600 hover:text-gray-800 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  // Payment Modal
  const PaymentModal = () => {
    if (!selectedPayment) return null;

    const processPayment = (method) => {
      const updatedPayments = paymentTracking.map(p => 
        p.id === selectedPayment.id 
          ? { ...p, status: 'paid', paidDate: new Date().toISOString().split('T')[0] }
          : p
      );
      setPaymentTracking(updatedPayments);
      setShowPaymentModal(false);
      setSelectedPayment(null);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
          <h3 className="text-xl font-bold mb-4">Process Payment</h3>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="font-semibold">{selectedPayment.supplier}</p>
            <p className="text-sm text-gray-600 mt-1">Invoice: {selectedPayment.invoiceNo}</p>
            <p className="text-sm text-gray-600">Amount: ${selectedPayment.amount}</p>
            <p className="text-sm text-gray-600">Due Date: {selectedPayment.dueDate}</p>
          </div>

          <p className="text-sm text-gray-700 mb-4">Select payment method:</p>
          
          <div className="grid grid-cols-1 gap-2 mb-4">
            <button
              onClick={() => processPayment('bank')}
              className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              <CreditCard className="w-5 h-5" />
              Bank Transfer
            </button>
            
            <button
              onClick={() => processPayment('cash')}
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              <DollarSign className="w-5 h-5" />
              Cash Payment
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
  };

  // Smart notification component
  const InsightCard = ({ insight, type }) => {
    const Icon = insight.icon;
    const bgColors = {
      red: 'bg-red-50 border-red-200',
      yellow: 'bg-yellow-50 border-yellow-200',
      blue: 'bg-blue-50 border-blue-200',
      green: 'bg-green-50 border-green-200',
      purple: 'bg-purple-50 border-purple-200'
    };
    
    const iconColors = {
      red: 'text-red-600',
      yellow: 'text-yellow-600',
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600'
    };

    return (
      <div className={`rounded-lg border-2 p-4 ${bgColors[insight.color]} transition-all hover:shadow-lg`}>
        <div className="flex items-start">
          <div className={`p-2 rounded-full ${bgColors[insight.color]} mr-3`}>
            <Icon className={`w-5 h-5 ${iconColors[insight.color]}`} />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">{insight.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{insight.message}</p>
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-700">{insight.action}</p>
              {insight.actionDetails?.savings > 0 && (
                <p className="text-xs text-green-600 mt-1">
                  💰 Bulk order saves ${insight.actionDetails.savings}
                </p>
              )}
              <div className="flex gap-2 mt-2">
                {type === 'urgent' && insight.autoOrderAvailable && (
                  <button 
                    onClick={() => createAutoOrder(insight.actionDetails)}
                    className={`text-xs px-3 py-1 rounded-full ${insight.color === 'red' ? 'bg-red-600 text-white' : 'bg-yellow-600 text-white'} hover:opacity-90 transition flex items-center gap-1`}
                  >
                    <ShoppingCart className="w-3 h-3" />
                    Auto-Order Now
                  </button>
                )}
                {insight.autoOrderAvailable && type !== 'urgent' && (
                  <button 
                    onClick={() => createAutoOrder(insight.actionDetails)}
                    className="text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition flex items-center gap-1"
                  >
                    <Send className="w-3 h-3" />
                    Quick Order
                  </button>
                )}
                {insight.paymentDetails && (
                  <button 
                    onClick={() => {
                      setSelectedPayment(insight.paymentDetails);
                      setShowPaymentModal(true);
                    }}
                    className="text-xs px-3 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-1"
                  >
                    <CreditCard className="w-3 h-3" />
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Tab navigation
  const tabs = [
    { id: 'insights', name: 'Smart Insights', icon: Brain },
    { id: 'suppliers', name: 'Supplier Analytics', icon: BarChart3 },
    { id: 'payments', name: 'Payment Tracking', icon: CreditCard },
    { id: 'notifications', name: 'Notifications', icon: Bell }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header with tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Brain className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Smart Business Hub</h1>
                <p className="text-sm text-gray-600">AI-powered insights & automation</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
                {deliveryNotifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {deliveryNotifications.filter(n => !n.read).length}
                  </span>
                )}
              </div>
              <button className="text-sm bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex space-x-6 border-t">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition ${
                    activeTab === tab.id 
                      ? 'border-purple-600 text-purple-600' 
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <>
            {/* Urgent Actions */}
            {urgentActions.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-red-600 mr-2" />
                  <h2 className="text-xl font-bold text-gray-900">Urgent Actions Required</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {urgentActions.map((action, idx) => (
                    <InsightCard key={idx} insight={action} type="urgent" />
                  ))}
                </div>
              </div>
            )}

            {/* Pending Orders */}
            {pendingOrders.length > 0 && (
              <div className="mb-8 bg-orange-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Truck className="w-6 h-6 text-orange-600 mr-2" />
                  <h2 className="text-xl font-bold text-gray-900">Pending Orders</h2>
                </div>
                <div className="space-y-2">
                  {pendingOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between bg-white rounded-lg p-3">
                      <div>
                        <p className="font-medium">{order.items}</p>
                        <p className="text-sm text-gray-600">Delivery: {order.estimatedDelivery}</p>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedOrder(order);
                          setShowOrderModal(true);
                        }}
                        className="text-sm px-3 py-1 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
                      >
                        Confirm Order
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Daily Insights */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Today's Insights</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {insights.map((insight, idx) => (
                  <InsightCard key={idx} insight={insight} type="insight" />
                ))}
              </div>
            </div>

            {/* Growth Opportunities */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Growth Opportunities</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {opportunities.map((opp, idx) => (
                  <InsightCard key={idx} insight={opp} type="opportunity" />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Supplier Analytics Tab */}
        {activeTab === 'suppliers' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Supplier Performance Analytics</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {supplierPerformance.map((supplier) => (
                <div key={supplier.supplier} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{supplier.supplier}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(supplier.qualityRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-sm ml-1">{supplier.qualityRating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">On-Time Delivery</span>
                      <span className={`font-semibold ${supplier.onTimeDelivery >= 90 ? 'text-green-600' : supplier.onTimeDelivery >= 80 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {supplier.onTimeDelivery}%
                      </span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Avg Delivery Time</span>
                      <span className="font-semibold">{supplier.avgDeliveryTime} days</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Response Time</span>
                      <span className="font-semibold">{supplier.responseTime}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Orders</span>
                      <span className="font-semibold">{supplier.totalOrders}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Spent</span>
                      <span className="font-semibold">${supplier.totalSpent.toLocaleString()}</span>
                    </div>
                    
                    {supplier.lastIssue && (
                      <div className="mt-3 p-2 bg-red-50 rounded text-xs text-red-700">
                        <AlertCircle className="w-3 h-3 inline mr-1" />
                        Last issue: {supplier.lastIssue}
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <button className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition">
                      View History
                    </button>
                    <button className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Supplier Comparison Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Performance Comparison</h3>
              <div className="space-y-4">
                {supplierPerformance.map((supplier) => (
                  <div key={supplier.supplier} className="flex items-center">
                    <span className="w-24 text-sm">{supplier.supplier}</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-200 rounded-full h-4 relative">
                        <div 
                          className="bg-purple-600 h-4 rounded-full"
                          style={{ width: `${supplier.onTimeDelivery}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-semibold">{supplier.onTimeDelivery}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Payment Tracking Tab */}
        {activeTab === 'payments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Payment Tracking</h2>
              <div className="flex gap-2">
                <span className="text-sm px-3 py-1 bg-red-100 text-red-700 rounded-full">
                  Overdue: ${paymentTracking.filter(p => p.status === 'overdue').reduce((sum, p) => sum + p.amount, 0)}
                </span>
                <span className="text-sm px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                  Pending: ${paymentTracking.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.amount, 0)}
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Supplier</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paymentTracking.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm">{payment.supplier}</td>
                      <td className="px-6 py-4 text-sm font-mono">{payment.invoiceNo}</td>
                      <td className="px-6 py-4 text-sm font-semibold">${payment.amount}</td>
                      <td className="px-6 py-4 text-sm">{payment.dueDate}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          payment.status === 'paid' ? 'bg-green-100 text-green-700' :
                          payment.status === 'overdue' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {payment.status === 'paid' ? 'Paid' : 
                           payment.status === 'overdue' ? `Overdue ${payment.daysOverdue}d` :
                           `Due in ${payment.daysUntilDue}d`}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {payment.status !== 'paid' && (
                          <button
                            onClick={() => {
                              setSelectedPayment(payment);
                              setShowPaymentModal(true);
                            }}
                            className="text-sm text-blue-600 hover:text-blue-800"
                          >
                            Pay Now
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Notifications</h2>
            
            <div className="space-y-3">
              {deliveryNotifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`bg-white rounded-lg shadow p-4 flex items-start gap-3 ${
                    !notification.read ? 'border-l-4 border-purple-600' : ''
                  }`}
                >
                  <div className={`p-2 rounded-full ${
                    notification.type === 'delivery' ? 'bg-green-100' :
                    notification.type === 'delay' ? 'bg-red-100' :
                    'bg-blue-100'
                  }`}>
                    {notification.type === 'delivery' ? <Truck className="w-4 h-4 text-green-600" /> :
                     notification.type === 'delay' ? <AlertTriangle className="w-4 h-4 text-red-600" /> :
                     <CheckCircle className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm ${!notification.read ? 'font-semibold' : ''}`}>
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                  {notification.urgent && (
                    <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">Urgent</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showOrderModal && <OrderModal />}
      {showPaymentModal && <PaymentModal />}
    </div>
  );
};

export default SmartInsightsEngine;