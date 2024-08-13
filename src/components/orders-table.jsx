// src/components/OrderTable.js
'use client'
import { Avatar } from '@/components/avatar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { db } from '@/firebase-config'
import { get, ref } from 'firebase/database'
import { useEffect, useState } from 'react'
import { Subheading } from './heading'

const OrderTable = () => {
  const [ordersData, setOrdersData] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersRef = ref(db, 'orders')
      const snapshot = await get(ordersRef)
      if (snapshot.exists()) {
        const data = snapshot.val()
        const ordersArray = Object.keys(data)?.map((key) => data[key])
        setOrdersData(ordersArray)
      } else {
        console.log('No data available')
      }
    }

    fetchOrders()
  }, [])

  return (
    <>
      <Subheading className="mt-14">Recent orders coming from firebase</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Order number</TableHeader>
            <TableHeader>Purchase date</TableHeader>
            <TableHeader>Customer</TableHeader>
            <TableHeader>Event</TableHeader>
            <TableHeader className="text-right">Amount</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {ordersData?.map((order) => (
            <TableRow key={order?.id} title={`Order #${order?.id}`}>
              <TableCell>{order?.id}</TableCell>
              <TableCell className="text-zinc-500">{order?.date}</TableCell>
              <TableCell>{order?.customer?.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar src={order?.event?.thumbUrl} className="size-6" />
                  <span>{order?.event?.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">US{order?.amount?.usd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default OrderTable
