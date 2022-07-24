import { Col, Row, Space, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { purchaseItem, returnitem } from './shoppingSlice'

const Wallet = function () {
  const purchasedItem = useSelector((state) => state.shopping.itemsCount)
  const dispatch = useDispatch()

  return (
    <Row>
      <Col span={12}>
        <Space size={'large'}>
          <Button type="primary" onClick={() => dispatch(purchaseItem())}>
            {' '}
            Purchase Item ++
          </Button>
          Total purchased Item {purchasedItem}
          <Button type="dashed" onClick={() => dispatch(returnitem())}>
            Return Item--
          </Button>
        </Space>
      </Col>
    </Row>
  )
}

export default Wallet
