export const formatToVND = (amount: string): string => {
    const numberAmount = parseFloat(amount?.replace(/[^\d]/g, ''));
    if (isNaN(numberAmount)) {
      return 'Invalid amount';
    }
  
    return numberAmount
      .toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      })
      .replace('₫', 'VND');
  };