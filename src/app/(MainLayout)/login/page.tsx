/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Button, Input, Form } from "antd"
import { MailOutlined, FacebookFilled, GoogleOutlined } from "@ant-design/icons"
import Link from "next/link"
import styles from "@/app/styles.module.css"
import { useAppDispatch } from "@/redux/hooks"
import { useLoginMutation } from "@/redux/feature/auth/authApi"
import { setUser, TUser } from "@/redux/feature/auth/authSlice"
import { verifyToken } from "@/utils/verifyToken"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import setAccessToken from "@/Action/setToken"
const Login=() =>{
  const [loading, setLoading] = useState(false)
const router = useRouter();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const onFinish = async (data: any) => {
    setLoading(true)
    try {
      // Handle login logic here
      console.log("Success:", data)
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      setLoading(true)
      setAccessToken(res.data.accessToken);
      const user = verifyToken(res.data.accessToken) as TUser;
    //   console.log("dispatchUser", user);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      setLoading(false)
      toast.success(res?.message);
      router.push("/");
      if (loading) return <p>Loading...</p>;
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`md:min-h-screen flex items-center justify-center mt-5 md:mt-0 px-4 md:py-12 bg-white ${styles.fontInter}`}>
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className={`text-3xl font-bold  text-gray-900 `}>Log in </h1>
        </div>

        <Form name="login" onFinish={onFinish} layout="vertical" className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-400" />}
                placeholder="Enter Email"
                size="large"
                className="rounded-xl"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Enter your password" size="large" className="rounded-xl" />
            </Form.Item>
          </div>

          <div className="flex items-center justify-end">
            <Link href="/forgot-password" className={`text-sm text-gray-500 hover:text-gray-700 ${styles.fontInter}`}>
              Forget Password?
            </Link>
          </div>

          <Button
           
            htmlType="submit"
            loading={loading}
            className="w-full h-12 bg-black hover:bg-gray-800 rounded-xl"
          >
            Log In
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              icon={<FacebookFilled />}
              size="large"
              className="w-full h-12 rounded-xl flex items-center justify-center bg-[#0C82EE] text-white hover:bg-[#1874EA] border-none"
            >
              Continue with Facebook
            </Button>

            <Button
              icon={<GoogleOutlined />}
              size="large"
              className="w-full h-12 rounded-xl flex items-center justify-center border-2 hover:border-gray-300"
            >
              Continue with Google
            </Button>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/signUp" className="text-[#FF4444] hover:text-[#FF6666]">
                Sign Up
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login