# Razorpay Payment Modal

A comprehensive React component for integrating Razorpay payments into your Next.js application.

## Features

- 🎨 Modern, responsive UI with Tailwind CSS
- 🔒 Secure payment processing with Razorpay
- ✅ Form validation with error handling
- 📱 Mobile-friendly design
- 🎯 TypeScript support
- 🔄 Loading states and error handling
- ⌨️ Keyboard navigation (ESC to close)

## Setup

### 1. Install Dependencies

The `react-razorpay` package is already included in your project. If you need to install it:

```bash
npm install react-razorpay
```

### 2. Environment Variables

Add the following environment variables to your `.env.local` file:

```env
# Razorpay Keys (Get these from your Razorpay Dashboard)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_test_key_id
RAZORPAY_KEY_ID=rzp_test_your_test_key_id
RAZORPAY_KEY_SECRET=your_test_key_secret

# For production, use live keys
# NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_your_live_key_id
# RAZORPAY_KEY_ID=rzp_live_your_live_key_id
# RAZORPAY_KEY_SECRET=your_live_key_secret
```

### 3. Install Razorpay Server SDK

```bash
npm install razorpay
```

## Usage

### Basic Usage

```tsx
import React, { useState } from 'react';
import PaymentModal from '@/components/models/PaymentModel';

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePaymentSuccess = (response: any) => {
    console.log('Payment successful:', response);
    // Handle successful payment
  };

  const handlePaymentFailure = (error: any) => {
    console.error('Payment failed:', error);
    // Handle payment failure
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Pay Now
      </button>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amount={1000} // Amount in rupees
        currency="INR"
        orderId="order_123"
        customerName="John Doe"
        customerEmail="john@example.com"
        customerPhone="9876543210"
        description="Payment for your order"
        onSuccess={handlePaymentSuccess}
        onFailure={handlePaymentFailure}
      />
    </div>
  );
};
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isOpen` | `boolean` | Yes | - | Controls modal visibility |
| `onClose` | `() => void` | Yes | - | Function to close modal |
| `amount` | `number` | Yes | - | Payment amount in rupees |
| `currency` | `string` | No | `'INR'` | Currency code |
| `orderId` | `string` | No | - | Custom order ID |
| `customerName` | `string` | No | `''` | Customer's full name |
| `customerEmail` | `string` | No | `''` | Customer's email |
| `customerPhone` | `string` | No | `''` | Customer's phone number |
| `description` | `string` | No | `'Payment for your order'` | Payment description |
| `onSuccess` | `(response: any) => void` | No | - | Success callback |
| `onFailure` | `(error: any) => void` | No | - | Failure callback |

## API Integration

The component includes a built-in API call to `/api/create-order` for creating Razorpay orders. Make sure you have the API route set up in your Next.js application.

### API Route Structure

```typescript
// src/app/api/create-order/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  // Handle order creation
}
```

## Styling

The component uses Tailwind CSS classes and can be customized by modifying the className props. The design is responsive and follows modern UI/UX principles.

## Security

- All payment processing is handled securely through Razorpay
- Sensitive data is not stored in the component
- Environment variables are used for API keys
- Server-side order creation prevents client-side manipulation

## Error Handling

The component includes comprehensive error handling for:
- Form validation errors
- Network errors
- Razorpay API errors
- Missing configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

For testing, use Razorpay's test mode with test credentials. The component will work seamlessly with both test and live environments.

## Example

See `PaymentModalExample.tsx` for a complete usage example with order summary and status handling.
