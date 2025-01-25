import OrderDetails from './OrderDetails'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  return {
    title: `Order ${params.id}`,
  }
}

export default async function OrderPage({
  params,
}: {
  params: { id: string }
}) {
  const paypalClientId = process.env.PAYPAL_CLIENT_ID || 'sb'
  return <OrderDetails orderId={params.id} paypalClientId={paypalClientId} />
}
