import OrderDetails from './OrderDetails'
import { Metadata } from 'next'

interface Props {
  params: { id: string }
  searchParams: Record<string, string | string[] | undefined>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  return {
    title: `Order ${props.params.id}`,
  }
}

export default async function OrderPage(props: Props) {
  if (!props.params?.id) {
    return <div>Invalid order ID</div>
  }
  
  const paypalClientId = process.env.PAYPAL_CLIENT_ID || 'sb'
  return <OrderDetails orderId={props.params.id} paypalClientId={paypalClientId} />
}
