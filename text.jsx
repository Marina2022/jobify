// document.addEventListener('DOMContentLoaded', function () {
//   // Привязка обработчиков к кнопкам
//   //const publicId = window.CLOUDPAYMENTS_PUBLIC_ID;
//   document.querySelectorAll('.payButton').forEach(function (button) {
//     button.addEventListener('click', function () {
//       const amount = this.getAttribute('data-price');
//       const period = this.getAttribute('data-period');
//       const interval = this.getAttribute('data-interval');
//
//       var widget = new cp.CloudPayments();
//       widget.pay('charge', {
//         publicId: 'pk_7c29f654ae43f79a41454c795e3ea',
//         description: Подписка на ${period},
//         amount: 1000,
//         currency: 'RUB',
//         accountId: 'test@test.com',
//         invoiceId: '2728829',
//         data: {
//           CloudPayments: {
//             recurrent: {
//               interval: "Month",
//               period: 1
//             }
//           }
//         }
//       }, {
//         onSuccess: function (options) {
//           alert('Платеж успешен!');
//         },
//         onFail: function (reason, options) {
//           alert('Ошибка платежа: ' + reason);
//         }
//       });
//     });
//   });
// });
//
