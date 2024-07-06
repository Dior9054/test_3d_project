
// import { useEffect } from "react"
// import { useState } from "react"

// export function Box({ children, color, materialsthree }) {
//     const [state, setState] = useState(null)
//     const [check, setCheck] = useState(false)

//     let git = { ...children }

//     function fur(item, index) {
//         let dsdasad

//         if (!check) {
//             dsdasad = { ...item.props, material: materialsthree[index] }
//         } else {
//             let { material, ...gitfuck } = item.props
//             dsdasad = gitfuck
//         }

//         console.log(item, "item");

//         return {
//             ...dsdasad,
//             onPointerEnter: () => {
//                 // setState(color)
//                 setCheck(true)
//             },
//             onPointerLeave: () => {
//                 // setState([1, 1, 1])
//                 setCheck(false)
//             }
//         }
//     }

//     let run = {
//         ...git,
//         props: {
//             ...git.props,
//             children: git.props.children.map((item, index) => {
//                 return {
//                     ...item,
//                     props: fur(item, index)
//                 }
//             })
//         }
//     }

//     console.log(run, "run")

//     useEffect(() => {
//         let r = state?.[0]
//         let g = state?.[1]
//         let b = state?.[2]

//         run.props.children.map(item => {
//             return item.props.material?.color?.set(r, g, b)
//         })
//     }, [state])

//     return run
// }

