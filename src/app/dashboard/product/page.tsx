"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Container from '@/components/ui/Container'
import FileUploadField from '@/components/ui/FileUploadField'
import { Form } from '@/components/ui/form'
import InputField from '@/components/ui/InputField'
import { Select } from '@/components/ui/select'
import SelectField from '@/components/ui/SelectField'
import TextAreaField from '@/components/ui/TextAreaField'
import { productSchema } from '@/utils/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const page = () => {
    const form = useForm<z.infer<typeof productSchema>>({
        resolver: zodResolver(productSchema),
        defaultValues: { name: "", category: "", subcategory: "", brand: "", description: "", image: [], thumbnail: "" },
    });

    const addProduct = async (values: z.infer<typeof productSchema>) => {
        console.log(values)
    }
    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle className="text-center text-lg">Add Product</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(addProduct)} className='grid grid-cols-2 gap-6'>
                            <InputField name="name" label='Name' placeholder='Name' className='col-span-2' control={form.control} />
                            <SelectField name='category' label='Category' options={[]} control={form.control} />
                            <SelectField name='subcategory' label='Sub Category' options={[]} control={form.control} />
                            <SelectField name='brand' label='Brand' options={[]} control={form.control} />
                            <SelectField name='size' label='Size' options={[]} control={form.control} />
                            <TextAreaField name='description' label='Description' className='col-span-2' placeholder='description' control={form.control} />
                            <FileUploadField name="image" label="Upload Single File" control={form.control} required className="col-span-2" />
                            <FileUploadField name="thumbnail" label="Upload Multiple Files" control={form.control} className="col-span-2" multiple required />
                            <Button type="submit" className="w-full">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </Container>
    )
}

export default page