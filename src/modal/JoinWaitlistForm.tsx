import { useModalContext } from '@/contex/modalContext';
import { Button } from '@/ui/Button';
import { TextField } from '@/ui/Input/TextField';
import { emailExists, validateEmail } from '@/util/verificiation';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const initialData = {
  email: '',
  fullname: ''
};

const JoinWaitlistForm = () => {
  const modalHook = useModalContext();
  const router = useRouter();
  const [form, setForm] = useState(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setError] = useState<string>('');
  const onChange = (e: any) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (isValid) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
      } else {
        setError('enter a valid email address');
      }
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (err && err.length > 0) return;
    setLoading(true);
    const info = await emailExists(form.email, process.env.NEXT_PUBLIC_SHEET_URL as string).catch(() => {
      setLoading(false);
      toast.error('something went wrong!!');
    });
    if (info) {
      toast.error(info);
      setLoading(false);
      return;
    }
    fetch(process.env.NEXT_PUBLIC_SHEET_URL as string, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [form]
      })
    })
      .then(() => {
        setLoading(false);
        setForm(initialData);
        toast.success('Successfully added to waitlist');
        modalHook?.closeModal();
        router.push('/thanks');
      })
      .catch(() => {
        setLoading(false);
        toast.error('Failed to add to waitlist');
      });
  };
  return (
    <div className="relative flex w-full flex-col items-center justify-center p-8">
      <div className="flex w-full justify-end">
        <i className="ri-close-line cursor-pointer text-[27px] font-[500] text-white" onClick={modalHook?.closeModal} />
      </div>

      <div className="mx-auto flex w-full max-w-[90%] flex-col items-center justify-center">
        <h1 className="w-[283px] pt-4 text-center font-rube text-[25px] font-normal leading-[38px] text-white lg:text-[36px] lg:leading-[44px]">
          We’re Glad To Have You!
        </h1>
        <span className="w-[297px] py-4 text-center font-rube text-[13px] font-[400] leading-[19px] text-[#828282]">
          Thank you for your interest in Fraqvest, kindly fill out the form to get notified when we launch
        </span>

        <form className="mt-4 flex w-full flex-col" onSubmit={handleSubmit}>
          <TextField
            value={form.fullname}
            name="fullname"
            label="Full Name"
            placeholder="Enter your full name"
            autoComplete="off"
            onChange={onChange}
            required
          />
          <TextField
            value={form.email}
            type="email"
            name="email"
            err={err}
            label="Email Address"
            placeholder="Enter Email Address"
            onChange={onChange}
            autoComplete="off"
            required
          />
          <Button fullwidth={true} variant="filled" extraClass="w-full text-white text-center mt-6">
            {' '}
            {loading ? 'Loading...' : 'Join Waitlist'}{' '}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default JoinWaitlistForm;
