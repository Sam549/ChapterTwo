import { Link } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import {RegisterUser} from '../../apicalls/users';


const rules = [{

  required: true,
  message: 'required',
},];
function Register() {

  const onFinish = async (values) => {
    try {
      const response = await RegisterUser(values);
      if (response.success) {
        message.success(response.message);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message)
    }
  };


return (
  <div className='h-screen bg-primary flex justify-center items-center'>
    <div className='bg-white p-5 rounded w-[450px]'>
      <h1 >
        CHAPTER TWO
      </h1>
      <h4 className='text-gray-500'>
        REGISTER
      </h4>
      <Form layout='vertical'
        onFinish={onFinish}
      >
        <Form.Item label='Name' name='name' rules={rules}>
          <Input placeholder='Name' />
        </Form.Item>
        <Form.Item label='Email' name='email' rules={rules}>
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item label='Password' name='password' rules={rules}>
          <Input type='password' placeholder='Password' />
        </Form.Item>
        <Button type='primary' htmlType='submit' block className='mt-2'>
          <nav>Register</nav>
        </Button>
        <div className='mt-5 text-center'>
          <span >
            Already have an account? <Link to='/login'><nav id='lg'>Login</nav></Link>
          </span>
        </div>
      </Form>

    </div>

  </div>
)
}

export default Register