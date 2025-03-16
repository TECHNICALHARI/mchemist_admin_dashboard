import Container from '@/components/ui/Container'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Category from '@/components/master/Category'
import SubCategory from '@/components/master/SubCategory'
import Brand from '@/components/master/Brand'

const page = () => {
  return (
    <Container>
      <div className='my-6'>
        <h2 className='all-heading'>Master</h2>
      </div>
      <Tabs defaultValue="0" >
        <TabsList>
          <TabsTrigger value="0">Category</TabsTrigger>
          <TabsTrigger value="1">Sub Category</TabsTrigger>
          <TabsTrigger value="2">Brand</TabsTrigger>
        </TabsList>
        <TabsContent value="0">
          <Category />
        </TabsContent>
        <TabsContent value="1">
          <SubCategory />
        </TabsContent>
        <TabsContent value="2">
          <Brand />
        </TabsContent>
      </Tabs>
    </Container>
  )
}

export default page