import { Col, Row, Space, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './walletSlice'

const Wallet = function () {
  const balance = useSelector((state) => state.wallet.wallatBalance)
  const dispatch = useDispatch()

  return (
    <Row>
      <Col span={12}>
        <Space size={'large'}>
          <Button type="primary" onClick={() => dispatch(increment())}>
            {' '}
            Credit++
          </Button>
          <Button>Wallet Balance is {balance}</Button>
          <Button type="dashed" onClick={() => dispatch(decrement())}>
            Debit--
          </Button>
        </Space>
      </Col>
    </Row>
  )
}

export default Wallet
