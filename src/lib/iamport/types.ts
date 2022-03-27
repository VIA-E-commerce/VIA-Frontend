export interface Iamport {
  init: (accountID: string) => void;
  request_pay: (
    params: RequestPayParams,
    callback?: RequestPayResponseCallback,
  ) => void;
}

export interface RequestPayAdditionalParams {
  digital?: boolean;
  vbank_due?: string;
  m_redirect_url?: string;
  app_scheme?: string;
  biz_num?: string;
}

export interface Display {
  card_quota?: number[];
}

export interface RequestPayParams extends RequestPayAdditionalParams {
  pg?: PG;
  pay_method?: string;
  escrow?: boolean;
  merchant_uid: string;
  name?: string;
  amount: number;
  custom_data?: any;
  tax_free?: number;
  currency?: string;
  language?: string;
  buyer_name?: string;
  buyer_tel: string;
  buyer_email?: string;
  buyer_addr?: string;
  buyer_postcode?: string;
  notice_url?: string | string[];
  display?: Display;
}

export interface RequestPayAdditionalResponse {
  apply_num?: string;
  vbank_num?: string;
  vbank_name?: string;
  vbank_holder?: string | null;
  vbank_date?: number;
}

export interface RequestPayResponse extends RequestPayAdditionalResponse {
  success: boolean;
  error_code: string;
  error_msg: string;
  imp_uid: string | null;
  merchant_uid: string;
  pay_method?: PayMethod;
  paid_amount?: number;
  status?: PayStatus;
  name?: string;
  pg_provider?: string;
  pg_tid?: string;
  buyer_name?: string;
  buyer_email?: string;
  buyer_tel?: string;
  buyer_addr?: string;
  buyer_postcode?: string;
  custom_data?: any;
  paid_at?: number;
  receipt_url?: string;
}

export type RequestPayResponseCallback = (response: RequestPayResponse) => void;

export type PG =
  | 'html5_inicis'
  | 'inicis'
  | 'kcp'
  | 'kcp_billing'
  | 'uplus'
  | 'nice'
  | 'jtnet'
  | 'kicc'
  | 'bluewalnut'
  | 'kakaopay'
  | 'danal'
  | 'danal_tpay'
  | 'mobilians'
  | 'chai'
  | 'syrup'
  | 'payco'
  | 'paypal'
  | 'eximbay'
  | 'naverpay'
  | 'naverco'
  | 'smilepay'
  | 'alipay'
  | 'paymentwall'
  | 'payple'
  | 'tosspay'
  | 'smartro'
  | 'settle';

export type PayStatus = 'ready' | 'paid' | 'failed';

export type PayMethod =
  | 'card'
  | 'trans'
  | 'vbank'
  | 'phone'
  | 'samsung'
  | 'kpay'
  | 'kakaopay'
  | 'payco'
  | 'lpay'
  | 'ssgpay'
  | 'tosspay'
  | 'cultureland'
  | 'smartculture'
  | 'happymoney'
  | 'booknlife'
  | 'point'
  | 'wechat'
  | 'alipay'
  | 'unionpay'
  | 'tenpay';
