"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/Gemini';
import { LoaderCircle } from 'lucide-react';
import { db } from '@/utils/db';
import { MockMate } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment/moment';


function AddNewInterview() {

  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExp, setJobExp] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();

  const onSubmit = async (e)=>{
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExp);

    const promt = `Job position: ${jobPosition}, Job Description: ${jobDesc} , Years Of Experience: ${jobExp} . 
    Depends on this information please give me ${10} real interview questions with answers that generally
     asked in interviews in JSON format. Give question and answer as field. in JSON Please 
     generate a valid JSON response with only "question" and "answer" fields. No extra text.`;

    const result = await chatSession.sendMessage(promt);
    const AIResponse = (result.response.text()).replace("```json","").replace("```","");
    console.log(JSON.parse(AIResponse));
    setJsonResponse(AIResponse);

    if(AIResponse){
      const resp = await db.insert(MockMate).values({
        mockId: uuidv4(),
        jsonMockResp: AIResponse,
        jobPosition: jobPosition,
        jobDesc: jobDesc,
        jobExperience: jobExp,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdTime: moment().format('DD-MM-yyyy')
      }).returning({mockId:MockMate.mockId});
      console.log("Inserted ID: ",resp);
    }
    else{
      console.log("ERRor")
    }
    
    
    setLoading(false);
  }

  return (
    <div>

      <div className='px-8 py-10 border rounded-lg bg-secondary hover:scale-105 
      hover:shadow-md cursor-pointer transition-all'
      onClick={()=>{setOpenDialog(true)}}>
        <h2 className='text-md text-center'>+ Add New</h2>
      </div>

      <Dialog open={openDialog}>
        <DialogContent className='max-w-xl'>
          <DialogHeader>
            <DialogTitle className = 'text-xl'>Add details about your Job!</DialogTitle>
            <DialogDescription>
            <form onSubmit={onSubmit}>

              <h2 className='text-lg'>Tell Us More About you Job and Requirements</h2>
              <div className='mt-6 my-2'>
                <label>Job Role/Position</label>
                <Input placeholder='Ex. Full Stack Developer' required 
                 onChange={(event)=>setJobPosition(event.target.value)} />
              </div>
              <div className='my-2'>
                <label>Job Description/ tech Stack</label>
                <Textarea placeholder='Ex. JavaScript, React, Node, PostgreSQL etc...' required 
                 onChange={(event)=>setJobDesc(event.target.value)} />
              </div>
              <div className='my-3'>
                <label>Years of Experience</label>
                <Input placeholder='Ex. 2' type='number' required max='20'
                 onChange={(event)=>setJobExp(event.target.value)} />
              </div>

              <div className='flex gap-5 justify-end'>
                <Button type='button' variant="ghost" onClick={()=>{setOpenDialog(false)}} >Cancel</Button>
                <Button type='submit' 
                  disabled={loading} > {
                  loading ? <>
                  <LoaderCircle className='animate-spin' />Generating from AI
                  </>:'Start Interview'
                  }
                </Button>
              </div>

            </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default AddNewInterview