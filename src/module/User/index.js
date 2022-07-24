import { Col, Row, Space, Button } from 'antd'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import userActions, { fetchUsers } from './userSlice'

const User = function () {
  const balance = useSelector((state) => state.User)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <Row>
      <Col span={12}>
        <Space size={'large'}>
          {/* <Button type="primary" onClick={() => dispatch(increment())}>
            {' '}
            Credit++
          </Button>
          <Button>User Balance is {balance}</Button>
          <Button type="dashed" onClick={() => dispatch(decrement())}>
            Debit--
          </Button> */}
        </Space>
      </Col>
    </Row>
  )
}

export default User
