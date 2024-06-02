import {Link} from 'react-router-dom';
import {Form, Input, Button, message, } from 'antd'



const rules = [{
  
  required: true,
  // eslint-disable-next-line 
  message: 'required',
},];
function Login(){

    const onFinish = (values) => {
      console.log("Success:", values);
    };

  return (



    <div className='h-screen bg-primary flex justify-center items-center'>
      <div className='bg-white p-5 rounded w-[450px]'>
        <h1 >
          CHAPTER TWO
        </h1>
        <h4 className='text-gray-500'>
          Login
        </h4>
        <Form layout='vertical'
        onFinish={onFinish}
        >
        <Form.Item label='Email' name = 'email' rules={rules}>
          <Input placeholder='Email'/>
        </Form.Item>
        <Form.Item label='Password' name = 'password' rules={rules}>
          <Input type='password' placeholder='Password'/>
        </Form.Item>
        <Button type='primary' htmlType='submit' block className='mt-2'>
          <nav>Login</nav>
        </Button>
        <div className='mt-5 text-center'>
        <span >
          Don't have an account? <Link to='/register'><nav id='lg'>Register</nav></Link>
        </span>
        </div>
         </Form>

      </div>
 
    </div>
    
  )
}

export default Login