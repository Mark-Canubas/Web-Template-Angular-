import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { StatsCard } from '../../shared/components/stats-card/stats-card';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ProductCard } from '../../shared/components/product-card/product-card';

@Component({
  selector: 'app-home',
  imports: [
    PageHeader,
    StatsCard,
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule,
    TagModule,
    RatingModule,
    FormsModule,
    ProductCard,
  ],
  templateUrl: './home.html',
})
export class Home {
  pageTitle = 'Dashboard';
  pageSubtitle = 'Welcome to the dashboard';

  products = [
    {
      id: '1',
      name: 'Wireless Headphones',
      description:
        'Premium noise-cancelling headphones with superior sound quality',
      price: 299.99,
      rating: 4.5,
      category: 'Electronics',
      inventoryStatus: 'In Stock',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    },
    {
      id: '2',
      name: 'Smart Watch',
      description:
        'Feature-rich smartwatch with health tracking and notifications',
      price: 399.99,
      rating: 4.8,
      category: 'Electronics',
      inventoryStatus: 'Low Stock',
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    },
    {
      id: '3',
      name: 'Laptop Stand',
      description: 'Ergonomic aluminum laptop stand for better posture',
      price: 49.99,
      rating: 4.2,
      category: 'Accessories',
      inventoryStatus: 'In Stock',
      image:
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80',
    },
    {
      id: '4',
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical keyboard with customizable switches',
      price: 149.99,
      rating: 4.6,
      category: 'Electronics',
      inventoryStatus: 'In Stock',
      image:
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80',
    },
    {
      id: '5',
      name: 'USB-C Hub',
      description: 'Multi-port USB-C hub with HDMI and SD card reader',
      price: 79.99,
      rating: 4.3,
      category: 'Accessories',
      inventoryStatus: 'Out of Stock',
      image:
        'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&q=80',
    },
    {
      id: '6',
      name: 'Wireless Mouse',
      description: 'Precision wireless mouse with programmable buttons',
      price: 59.99,
      rating: 4.4,
      category: 'Electronics',
      inventoryStatus: 'In Stock',
      image:
        'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80',
    },
  ];

  transactions = [
    {
      id: 'TXN-1001',
      user: 'Juan Dela Cruz',
      amount: 2500,
      status: 'Completed',
      date: new Date('2025-01-05'),
    },
    {
      id: 'TXN-1002',
      user: 'Maria Santos',
      amount: 1800,
      status: 'Pending',
      date: new Date('2025-01-06'),
    },
    {
      id: 'TXN-1003',
      user: 'Pedro Reyes',
      amount: 3200,
      status: 'Failed',
      date: new Date('2025-01-07'),
    },
  ];

  stats = [
    {
      title: 'Users',
      value: '1,234',
      icon: 'pi pi-users',
      description: 'Active users in the last 24 hours',
    },
    {
      title: 'Sales',
      value: '$12,345',
      icon: 'pi pi-shopping-cart',
      description: 'Total sales in the last 24 hours',
    },
    {
      title: 'Visits',
      value: '23,456',
      icon: 'pi pi-chart-line',
      description: 'Website visits in the last 24 hours',
    },
    {
      title: 'Orders',
      value: '567',
      icon: 'pi pi-box',
      description: 'New orders in the last 24 hours',
    },
  ];

  revenueData = [
    { month: 'Jan', revenue: 12500 },
    { month: 'Feb', revenue: 15800 },
    { month: 'Mar', revenue: 18200 },
    { month: 'Apr', revenue: 22100 },
    { month: 'May', revenue: 19500 },
    { month: 'Jun', revenue: 25300 },
  ];

  userActivity = [
    { day: 'Mon', users: 245 },
    { day: 'Tue', users: 312 },
    { day: 'Wed', users: 289 },
    { day: 'Thu', users: 367 },
    { day: 'Fri', users: 421 },
    { day: 'Sat', users: 198 },
    { day: 'Sun', users: 156 },
  ];

  recentTransactions = [
    {
      id: 'TXN001',
      customer: 'John Doe',
      amount: 1250.0,
      status: 'Completed',
      date: '2025-12-29',
    },
    {
      id: 'TXN002',
      customer: 'Jane Smith',
      amount: 850.5,
      status: 'Pending',
      date: '2025-12-29',
    },
    {
      id: 'TXN003',
      customer: 'Mike Johnson',
      amount: 2100.75,
      status: 'Completed',
      date: '2025-12-28',
    },
    {
      id: 'TXN004',
      customer: 'Sarah Williams',
      amount: 475.25,
      status: 'Failed',
      date: '2025-12-28',
    },
    {
      id: 'TXN005',
      customer: 'David Brown',
      amount: 1680.0,
      status: 'Completed',
      date: '2025-12-27',
    },
  ];

  getStatusClass(status: string): string {
    const statusMap: { [key: string]: string } = {
      Completed: 'bg-green-100 text-green-800',
      Pending: 'bg-yellow-100 text-yellow-800',
      Failed: 'bg-red-100 text-red-800',
    };
    return statusMap[status] || 'bg-gray-100 text-gray-800';
  }

  getSeverity(status: string): 'success' | 'warn' | 'danger' | 'info' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Low Stock':
        return 'warn';
      case 'Out of Stock':
        return 'danger';
      default:
        return 'info';
    }
  }
}
