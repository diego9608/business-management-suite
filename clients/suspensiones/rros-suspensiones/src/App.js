import React, { useState, useEffect } from 'react';
import { 
  Car, Wrench, Package, Users, DollarSign, Calendar, BarChart3, 
  Settings, Bell, Search, Plus, Edit, Trash2, Check, X, 
  Clock, AlertCircle, TrendingUp, FileText, Database,
  Truck, Shield, Award, Phone, Mail, MapPin, Filter,
  Download, Upload, RefreshCw, Activity, Gauge, Home
} from 'lucide-react';

const SuspensionManagementSystem = () => {
  // Core state management
  const [activeTab, setActiveTab] = useState('dashboard');
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Amortiguador Delantero Toyota', brand: 'KYB', model: 'KYB-334503', quantity: 12, price: 1250, minStock: 5, category: 'amortiguadores', compatible: ['Corolla 2015-2020', 'Camry 2018-2023'] },
    { id: 2, name: 'Espiral Trasero Nissan', brand: 'Moog', model: 'CC81370', quantity: 8, price: 850, minStock: 3, category: 'espirales', compatible: ['Sentra 2013-2019', 'Versa 2015-2020'] },
    { id: 3, name: 'Base Amortiguador Ford', brand: 'Monroe', model: 'MK6620', quantity: 15, price: 450, minStock: 5, category: 'bases', compatible: ['F-150 2015-2023', 'Ranger 2019-2023'] },
    { id: 4, name: 'Kit Completo Suspension VW', brand: 'Sachs', model: 'SCH-290980', quantity: 4, price: 8500, minStock: 2, category: 'kits', compatible: ['Jetta 2011-2018', 'Golf 2013-2020'] }
  ]);

  const [vehicles, setVehicles] = useState([
    { id: 1, client: 'Juan Martinez', plate: 'ABC-123', make: 'Toyota', model: 'Corolla', year: 2018, vin: '1HGBH41JXMN109186', status: 'en-servicio', entryDate: '2024-01-15', estimatedCompletion: '2024-01-17' },
    { id: 2, client: 'Maria Lopez', plate: 'XYZ-789', make: 'Nissan', model: 'Sentra', year: 2016, vin: '3N1AB7AP7GY123456', status: 'esperando-partes', entryDate: '2024-01-16', estimatedCompletion: '2024-01-20' },
    { id: 3, client: 'Carlos Rodriguez', plate: 'DEF-456', make: 'Ford', model: 'F-150', year: 2020, vin: '1FTEW1EP5JFA12345', status: 'diagnostico', entryDate: '2024-01-17', estimatedCompletion: null }
  ]);

  const [services, setServices] = useState([
    { id: 1, vehicleId: 1, type: 'Cambio Amortiguadores Delanteros', mechanic: 'Pedro Sanchez', startTime: '2024-01-15 09:00', endTime: null, parts: [{ inventoryId: 1, quantity: 2 }], laborCost: 800, status: 'en-progreso' },
    { id: 2, vehicleId: 2, type: 'Revision Completa Suspension', mechanic: 'Luis Gomez', startTime: '2024-01-16 10:30', endTime: '2024-01-16 12:00', parts: [], laborCost: 400, status: 'completado' }
  ]);

  const [clients, setClients] = useState([
    { id: 1, name: 'Juan Martinez', phone: '555-0123', email: 'juan@email.com', address: 'Calle Principal 123', vehicles: ['ABC-123'], totalSpent: 15600, lastVisit: '2024-01-15', loyaltyPoints: 1560 },
    { id: 2, name: 'Maria Lopez', phone: '555-0456', email: 'maria@email.com', address: 'Av. Juarez 456', vehicles: ['XYZ-789'], totalSpent: 8900, lastVisit: '2024-01-16', loyaltyPoints: 890 }
  ]);

  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'Autopartes del Norte', contact: 'Roberto Silva', phone: '555-1111', email: 'ventas@autopartesnorte.com', brands: ['KYB', 'Monroe'], deliveryTime: 2, credit: 30000 },
    { id: 2, name: 'Suspensiones Premium', contact: 'Ana Garcia', phone: '555-2222', email: 'ana@suspremium.com', brands: ['Sachs', 'Moog'], deliveryTime: 1, credit: 50000 }
  ]);

  const [mechanics, setMechanics] = useState([
    { id: 1, name: 'Pedro Sanchez', specialty: 'Suspension Deportiva', experience: 15, certification: 'ASE Certified', activeJobs: 2, completedToday: 3, rating: 4.8 },
    { id: 2, name: 'Luis Gomez', specialty: 'Vehiculos Pesados', experience: 10, certification: 'Monroe Expert', activeJobs: 1, completedToday: 2, rating: 4.6 }
  ]);

  const [warranties, setWarranties] = useState([
    { id: 1, serviceId: 2, startDate: '2024-01-16', endDate: '2025-01-16', type: 'Partes y Mano de Obra', status: 'activa', terms: '12 meses o 20,000 km' }
  ]);

  const [appointments, setAppointments] = useState([
    { id: 1, clientName: 'Roberto Diaz', date: '2024-01-18', time: '10:00', service: 'Diagnostico Ruidos', estimatedDuration: 1, status: 'confirmada' },
    { id: 2, clientName: 'Sofia Mendez', date: '2024-01-19', time: '14:00', service: 'Cambio Kit Completo', estimatedDuration: 3, status: 'pendiente' }
  ]);

  // Dashboard metrics calculation
  const calculateMetrics = () => {
    const today = new Date().toISOString().split('T')[0];
    const vehiclesInService = vehicles.filter(v => v.status === 'en-servicio').length;
    const completedToday = services.filter(s => s.status === 'completado' && s.endTime?.includes(today)).length;
    const lowStockItems = inventory.filter(i => i.quantity <= i.minStock).length;
    const totalRevenue = services.reduce((sum, s) => sum + s.laborCost, 0);
    
    return { vehiclesInService, completedToday, lowStockItems, totalRevenue };
  };

  const metrics = calculateMetrics();

  // Vehicle status badge
  const getStatusBadge = (status) => {
    const statusConfig = {
      'en-servicio': { color: 'bg-blue-100 text-blue-800', icon: Wrench, text: 'En Servicio' },
      'esperando-partes': { color: 'bg-yellow-100 text-yellow-800', icon: Clock, text: 'Esperando Partes' },
      'diagnostico': { color: 'bg-purple-100 text-purple-800', icon: Search, text: 'Diagnóstico' },
      'completado': { color: 'bg-green-100 text-green-800', icon: Check, text: 'Completado' },
      'entregado': { color: 'bg-gray-100 text-gray-800', icon: Car, text: 'Entregado' }
    };
    
    const config = statusConfig[status] || statusConfig['diagnostico'];
    const Icon = config.icon;
    
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        <Icon className="w-3 h-3" />
        {config.text}
      </span>
    );
  };

  // Tab navigation
  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'vehicles', name: 'Vehículos', icon: Car },
    { id: 'inventory', name: 'Inventario', icon: Package },
    { id: 'services', name: 'Servicios', icon: Wrench },
    { id: 'clients', name: 'Clientes', icon: Users },
    { id: 'appointments', name: 'Citas', icon: Calendar },
    { id: 'mechanics', name: 'Mecánicos', icon: Wrench },
    { id: 'suppliers', name: 'Proveedores', icon: Truck },
    { id: 'warranties', name: 'Garantías', icon: Shield },
    { id: 'reports', name: 'Reportes', icon: BarChart3 },
    { id: 'settings', name: 'Configuración', icon: Settings }
  ];

  // Render dashboard
  const renderDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Panel de Control</h2>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm">Vehículos en Servicio</p>
              <p className="text-3xl font-bold text-blue-800">{metrics.vehiclesInService}</p>
            </div>
            <Car className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm">Completados Hoy</p>
              <p className="text-3xl font-bold text-green-800">{metrics.completedToday}</p>
            </div>
            <Check className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-600 text-sm">Inventario Bajo</p>
              <p className="text-3xl font-bold text-yellow-800">{metrics.lowStockItems}</p>
            </div>
            <AlertCircle className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 text-sm">Ingresos del Día</p>
              <p className="text-3xl font-bold text-purple-800">${metrics.totalRevenue.toLocaleString()}</p>
            </div>
            <DollarSign className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Active Services */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-600" />
          Servicios Activos
        </h3>
        <div className="space-y-3">
          {services.filter(s => s.status === 'en-progreso').map(service => {
            const vehicle = vehicles.find(v => v.id === service.vehicleId);
            return (
              <div key={service.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{service.type}</p>
                    <p className="text-sm text-gray-600">{vehicle?.make} {vehicle?.model} - {vehicle?.plate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{service.mechanic}</p>
                  <p className="text-xs text-gray-600">Iniciado: {new Date(service.startTime).toLocaleTimeString()}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-600" />
          Próximas Citas
        </h3>
        <div className="space-y-3">
          {appointments.slice(0, 3).map(apt => (
            <div key={apt.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">{apt.clientName}</p>
                <p className="text-sm text-gray-600">{apt.service}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{apt.date}</p>
                <p className="text-xs text-gray-600">{apt.time} - {apt.estimatedDuration}h</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Render vehicles section
  const renderVehicles = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Gestión de Vehículos</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          Nuevo Ingreso
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehículo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ingreso</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {vehicles.map(vehicle => (
              <tr key={vehicle.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{vehicle.make} {vehicle.model} {vehicle.year}</p>
                    <p className="text-sm text-gray-600">Placa: {vehicle.plate} | VIN: {vehicle.vin}</p>
                  </div>
                </td>
                <td className="px-6 py-4">{vehicle.client}</td>
                <td className="px-6 py-4">{getStatusBadge(vehicle.status)}</td>
                <td className="px-6 py-4">
                  <p className="text-sm">{vehicle.entryDate}</p>
                  {vehicle.estimatedCompletion && (
                    <p className="text-xs text-gray-600">Est: {vehicle.estimatedCompletion}</p>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FileText className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Render inventory section
  const renderInventory = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Control de Inventario</h2>
        <div className="flex gap-3">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200">
            <Upload className="w-4 h-4" />
            Importar
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            Nueva Parte
          </button>
        </div>
      </div>

      {/* Category filters */}
      <div className="flex gap-2">
        {['todos', 'amortiguadores', 'espirales', 'bases', 'kits'].map(cat => (
          <button
            key={cat}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 hover:bg-gray-200 capitalize"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {inventory.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              {item.quantity <= item.minStock && (
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Stock Bajo</span>
              )}
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">Marca: <span className="font-medium">{item.brand}</span></p>
              <p className="text-gray-600">Modelo: <span className="font-medium">{item.model}</span></p>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">Stock: <span className="font-bold">{item.quantity}</span></p>
                <p className="text-lg font-bold text-blue-600">${item.price}</p>
              </div>
              <div className="pt-2">
                <p className="text-xs text-gray-500">Compatible con:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.compatible.map((car, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">{car}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700">
                Ajustar Stock
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded text-sm hover:bg-gray-200">
                Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Render services section
  const renderServices = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Órdenes de Servicio</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          Nueva Orden
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <div className="flex gap-4">
            <select className="px-3 py-2 border rounded-lg text-sm">
              <option>Todos los estados</option>
              <option>En progreso</option>
              <option>Completado</option>
              <option>Facturado</option>
            </select>
            <select className="px-3 py-2 border rounded-lg text-sm">
              <option>Todos los mecánicos</option>
              {mechanics.map(m => (
                <option key={m.id}>{m.name}</option>
              ))}
            </select>
            <input
              type="date"
              className="px-3 py-2 border rounded-lg text-sm"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        
        <div className="divide-y">
          {services.map(service => {
            const vehicle = vehicles.find(v => v.id === service.vehicleId);
            const partsUsed = service.parts.map(p => {
              const part = inventory.find(i => i.id === p.inventoryId);
              return { ...part, quantity: p.quantity };
            });
            const partsCost = partsUsed.reduce((sum, p) => sum + (p.price * p.quantity), 0);
            const totalCost = service.laborCost + partsCost;
            
            return (
              <div key={service.id} className="p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{service.type}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {vehicle?.make} {vehicle?.model} - {vehicle?.plate} | Cliente: {vehicle?.client}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-gray-600">
                        <Wrench className="w-4 h-4 inline mr-1" />
                        {service.mechanic}
                      </span>
                      <span className="text-sm text-gray-600">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {new Date(service.startTime).toLocaleString()}
                      </span>
                    </div>
                    {partsUsed.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-700">Refacciones utilizadas:</p>
                        <ul className="mt-1 space-y-1">
                          {partsUsed.map((part, idx) => (
                            <li key={idx} className="text-sm text-gray-600">
                              • {part.name} x{part.quantity} - ${(part.price * part.quantity).toLocaleString()}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="mb-2">
                      {service.status === 'en-progreso' ? (
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">En Progreso</span>
                      ) : (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Completado</span>
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">Mano de obra: <span className="font-semibold">${service.laborCost}</span></p>
                      <p className="text-sm">Refacciones: <span className="font-semibold">${partsCost}</span></p>
                      <p className="text-lg font-bold text-blue-600">Total: ${totalCost.toLocaleString()}</p>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FileText className="w-5 h-5" />
                      </button>
                      <button className="text-green-600 hover:text-green-800">
                        <Check className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Render clients section
  const renderClients = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Gestión de Clientes</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          Nuevo Cliente
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map(client => (
          <div key={client.id} className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-lg">{client.name}</h3>
              <div className="flex items-center gap-1 text-yellow-500">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">{client.loyaltyPoints}</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{client.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{client.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-xs">{client.address}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total gastado:</span>
                <span className="font-semibold">${client.totalSpent.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-gray-600">Última visita:</span>
                <span>{client.lastVisit}</span>
              </div>
              <div className="mt-2">
                <p className="text-xs text-gray-600">Vehículos:</p>
                <div className="flex gap-1 mt-1">
                  {client.vehicles.map((v, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">{v}</span>
                  ))}
                </div>
              </div>
            </div>
            <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded text-sm hover:bg-gray-200">
              Ver Historial
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // Render mechanics section
  const renderMechanics = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Equipo de Mecánicos</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          Agregar Mecánico
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mechanics.map(mechanic => (
          <div key={mechanic.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{mechanic.name}</h3>
                  <p className="text-sm text-gray-600">{mechanic.specialty}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(mechanic.rating) ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                    ))}
                    <span className="text-sm text-gray-600 ml-1">{mechanic.rating}</span>
                  </div>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {mechanic.certification}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{mechanic.experience}</p>
                <p className="text-xs text-gray-600">Años exp.</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{mechanic.activeJobs}</p>
                <p className="text-xs text-gray-600">Activos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">{mechanic.completedToday}</p>
                <p className="text-xs text-gray-600">Hoy</p>
              </div>
            </div>
            
            <div className="flex gap-2 mt-6">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700">
                Ver Desempeño
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded text-sm hover:bg-gray-200">
                Asignar Trabajo
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Overview */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Rendimiento del Equipo</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">Servicios Completados Hoy</p>
              <p className="text-sm text-gray-600">Total del equipo</p>
            </div>
            <p className="text-3xl font-bold text-green-600">
              {mechanics.reduce((sum, m) => sum + m.completedToday, 0)}
            </p>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">Tiempo Promedio por Servicio</p>
              <p className="text-sm text-gray-600">Últimos 7 días</p>
            </div>
            <p className="text-3xl font-bold text-blue-600">2.5h</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Render warranties section
  const renderWarranties = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Gestión de Garantías</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Shield className="w-4 h-4" />
          Nueva Garantía
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm">Garantías Activas</p>
              <p className="text-2xl font-bold text-green-800">
                {warranties.filter(w => w.status === 'activa').length}
              </p>
            </div>
            <Shield className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-600 text-sm">Por Vencer (30 días)</p>
              <p className="text-2xl font-bold text-yellow-800">2</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm">Reclamaciones</p>
              <p className="text-2xl font-bold text-blue-800">0</p>
            </div>
            <AlertCircle className="w-8 h-8 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Servicio</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vigencia</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {warranties.map(warranty => {
              const service = services.find(s => s.id === warranty.serviceId);
              const vehicle = vehicles.find(v => v.id === service?.vehicleId);
              
              return (
                <tr key={warranty.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium">{service?.type}</p>
                      <p className="text-sm text-gray-600">{vehicle?.make} {vehicle?.model} - {vehicle?.client}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm">{warranty.type}</p>
                    <p className="text-xs text-gray-600">{warranty.terms}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm">{warranty.startDate}</p>
                    <p className="text-sm">hasta {warranty.endDate}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Activa
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FileText className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Main render
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Rros Suspensiones</h1>
              <p className="text-sm text-gray-600">Sistema de Gestión Integral</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar cliente, vehículo, orden..."
                className="pl-10 pr-4 py-2 border rounded-lg w-80"
              />
            </div>
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-[calc(100vh-73px)] shadow-sm">
          <nav className="p-4 space-y-1">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'vehicles' && renderVehicles()}
          {activeTab === 'inventory' && renderInventory()}
          {activeTab === 'services' && renderServices()}
          {activeTab === 'clients' && renderClients()}
          {activeTab === 'mechanics' && renderMechanics()}
          {activeTab === 'warranties' && renderWarranties()}
          {activeTab === 'appointments' && (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Módulo de Citas en Desarrollo</p>
            </div>
          )}
          {activeTab === 'suppliers' && (
            <div className="text-center py-12">
              <Truck className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Módulo de Proveedores en Desarrollo</p>
            </div>
          )}
          {activeTab === 'reports' && (
            <div className="text-center py-12">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Módulo de Reportes en Desarrollo</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="text-center py-12">
              <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Configuración del Sistema en Desarrollo</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SuspensionManagementSystem;