const colors = {
  default: '#CBCACE',
  primary: '#7464FC',
  success: '#4CD6C8',
  warning: '#FFB666',
  danger: '#FF7B7C',
  info: '#67CBFF'
}

// const gradient = {
//   primary: {
//     background: 'linear-gradient(45deg, #7464FC 30%, #948CE8 90%)',
//     boxShadow: '0 3px 5px 2px rgba(116, 100, 252, .30)',
//     color: 'white'
//   },
//   success: {
//     background: 'linear-gradient(45deg, #3FC2C5 30%, #5DF6E9 90%)',
//     boxShadow: '0 3px 5px 2px rgba(63, 194, 197, .30)',
//     color: 'white'
//   },
//   warning: {
//     background: 'linear-gradient(45deg, #FF8B89 30%, #FFB666 90%)',
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
//     color: 'white'
//   },
//   danger: {
//     background: 'linear-gradient(45deg, #FF7B7C 30%, #FF77C1 90%)',
//     boxShadow: '0 3px 5px 2px rgba(255, 119, 193, .30)',
//     color: 'white'
//   },
//   info: {
//     background: 'linear-gradient(45deg, #6795FF 30%, #67CBFF 90%)',
//     boxShadow: '0 3px 5px 2px rgba(103, 149, 255, .30)',
//     color: 'white'
//   },
//   disabled: {
//     background: 'rgba(0, 0, 0, 0.12)',
//     boxShadow: 'none',
//     color: 'rgba(0, 0, 0, 0.26)'
//   }
// }

export function match (name: any) {
  return colors[name] || undefined
}