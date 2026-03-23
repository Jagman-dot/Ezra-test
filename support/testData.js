export const TEST_CARDS = {
    SUCCESS_VISA: {
        number: '4242424242424242',
        expiry: '12/28',
        cvc: '123',
        zip: '11552'
    },
    DECLINED_CARD: {
        number: '4000000000000002',
        expiry: '12/28',
        cvc: '100',
        zip: '11552'
    },
    EXPIRED_CARD: {
        number: '4242424242424241',
        expiry: '01/20', // Past date
        cvc: '123',
        zip: '11552'
    }
};

export const SCAN_PRICE = {
    mri: '$999'
}