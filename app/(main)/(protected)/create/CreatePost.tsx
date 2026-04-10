"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,

  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { UploadImagen } from "@/components/imagen"


const formSchema = z.object({
  title: z
    .string()
    .min(5, "title must be at least 5 characters.")
    .max(200, " title must be at most 200 characters."),
  content: z
    .string()
    .min(50, "Description must be at least 50 characters."),
   
   
    
})




export function PostForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
            title: "",
            content: "",
           
    },
  })
function onSubmit(data: z.infer<typeof formSchema>) {
  const result=JSON.stringify(data)
    
   console.log(data)
  }
  

  
  

  return (
    <Card className="w-full sm:max-w-md mx-auto bg-slate-100 rounded-sm ">
      <CardHeader>
        <CardTitle className="text-2xl text-rose-800">Post a comment</CardTitle>
       
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Post Title
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="title"
                  
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="content"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-content">
                    Content
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-rhf-demo-content"
                      placeholder="Content"
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/min 50 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                 
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          <UploadImagen/> 
         
           
          </FieldGroup>
           <Button type ="submit">Submit</Button> 
        </form>
      </CardContent>
      
    </Card>
  )
}