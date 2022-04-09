import { LabelField } from '@/components';
import React from 'react';

import { Table } from './ChangeRefundTable.styles';

const ChangeRefundTable = () => {
  return (
    <Table>
      <tbody>
        <tr>
          <td>
            반품 및 환불
            <br />
            안내사항
          </td>
          <td>
            <ul>
              <li>반품/환불은 상품 수령 후 7일 이내</li>
              <li>
                제품 불량으로 반품하실 경우 택배비는 본사에서 전액 부담합니다.
              </li>
              <li>
                반송시 포장 불량으로 인해 상품이 훼손되었을 경우 반송 처리될 수
                있습니다.
              </li>
            </ul>
          </td>
        </tr>

        <tr>
          <td>
            반품할 수
            <br />
            없는 경우
          </td>
          <td>
            <ul>
              <li>
                제품 라벨제거, 착용, 수선, 세탁 등으로 상품 가치가 훼손된 경우
                반품이 불가능합니다.
              </li>
              <li>고객 귀착 사유로 상품이 훼손된 경우 반품이 불가능합니다.</li>
              <li>
                교환/환불을 받기 위해 고의적으로 상품을 훼손한 경우 소비자
                보호법 17조에 따라 손해배상이 청구될 수 있습니다.
              </li>
            </ul>
          </td>
        </tr>

        <tr>
          <td>교환 및 환불 절차</td>
          <td>
            <LabelField label="반품/환불 주소" size="large">
              (123-45) 서울시 구로구 오류동 아무건물 아무층
            </LabelField>
            <LabelField label="고객센터" size="large">
              02-1234-5678
            </LabelField>
            <LabelField label="반품/환불 배송비" size="large">
              3,000원
            </LabelField>
            <LabelField label="배송비 입금 계좌" size="large">
              국민은행 111111-22-333333
            </LabelField>
            <LabelField label="예금주" size="large">
              (주)VIA
            </LabelField>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default React.memo(ChangeRefundTable);
