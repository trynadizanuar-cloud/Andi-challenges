// // mod c_array;
// // use c_array::get_array_info;

// // c1
// mod c_array;
// use c_array::get_array_info;
// fn main() {
//     println!("{}", get_array_info(&[1, 2, 3, 4, 5]));
//     println!("{}", get_array_info(&["a", "b", "c"]));
//     println!("{}", get_array_info::<i32>(&[]));
// }

// mod c_array;
// use c_array::analyze_elements;
// // mod c_array;
// // use c_array::*;

// fn main() {
//     let arr1 = [
//         Value::Int(10),
//         Value::Str("hello".to_string()),
//         Value::Bool(true),
//     ];

//     let arr2 = [Value::Int(1), Value::Int(2), Value::Int(3)];

//     let arr3: [Value; 0] = []; // empty array

//     println!("{:?}", analyze_elements(&arr1));
//     println!("{:?}", analyze_elements(&arr2));
//     println!("{:?}", analyze_elements(&arr3));
// }

// mod c_array;
// use c_array::manage_stack;

// fn main() {
//     let res1 = manage_stack(
//         vec!["1".into(), "2".into()],
//         vec!["push:3", "push:4", "pop"],
//     );
//     println!("{:?}", res1);

//     let res2 = manage_stack(
//         vec![],
//         vec!["push:a", "push:b", "pop", "push:c"],
//     );
//     println!("{:?}", res2);
// }

// mod c_array;
// use c_array::manage_queue;

// fn main() {
//     let res1 = manage_queue(
//         vec!["1".to_string(), "2".to_string()],
//         vec!["enqueue:3", "dequeue", "enqueue:4"],
//     );

//     // akses langsung fields
//     println!("Queue: {:?}", res1.result);
//     println!("Enqueued: {}, Dequeued: {}, Ops: {}",
//         res1.stats.enqueued, res1.stats.dequeued, res1.stats.operations
//     );

//     let res2 = manage_queue(
//         vec![],
//         vec!["enqueue:x", "enqueue:y", "dequeue"],
//     );

//     println!("Queue: {:?}", res2.result);
//     println!("Enqueued: {}, Dequeued: {}, Ops: {}",
//         res2.stats.enqueued, res2.stats.dequeued, res2.stats.operations
//     );
// }

// mod c_array;
// use crate::c_array::c8::aggregate_strings;
// use crate::c_array::c8::aggregate_numbers;

// fn main() {
//     let numbers = vec![3, 1, 4, 1, 5, 9, 2, 6];
//     let result_numbers = aggregate_numbers(&numbers);

//     println!("Numbers Original: {:?}", result_numbers.original);
//     println!("Sum: {:?}", result_numbers.sum);
//     println!("Product: {:?}", result_numbers.product);
//     println!("Max: {:?}", result_numbers.max);
//     println!("Min: {:?}", result_numbers.min);
//     println!("Sorted Asc: {:?}", result_numbers.sorted_asc);
//     println!("Sorted Desc: {:?}", result_numbers.sorted_desc);

//     let fruits = vec![
//         "banana".to_string(),
//         "apple".to_string(),
//         "cherry".to_string(),
//         "date".to_string(),
//     ];
//     let result_strings = aggregate_strings(&fruits);

//     println!("\nStrings Original: {:?}", result_strings.original);
//     println!("Concatenated: {:?}", result_strings.concatenated);
//     println!("Longest: {:?}", result_strings.longest);
//     println!("Shortest: {:?}", result_strings.shortest);
//     println!("Sorted Asc: {:?}", result_strings.sorted_asc);
//     println!("Sorted Desc: {:?}", result_strings.sorted_desc);
// }

// mod c_array;
// use crate::c_array::c9::validate_array_data;
// use crate::c_array::c9::Value;

// fn main() {
//     let data1 = vec![
//         Value::Number(1),
//         Value::Number(2),
//         Value::Number(3),
//         Value::Number(4),
//         Value::Number(5),
//     ];

//     let data2 = vec![
//         Value::Number(1),
//         Value::Text("2".to_string()),
//         Value::Number(3),
//         Value::Null,
//         Value::Number(5),
//         Value::Undefined,
//     ];

//     let result1 = validate_array_data(&data1);
//     let result2 = validate_array_data(&data2);

//     println!("Data1: {:#?}", result1);
//     println!("Data2: {:#?}", result2);
// }

// mod c_array;
// use c_array::c7::transform_array;

// fn main() {
//     let numbers = vec![1, 2, 4, 6, 9];

//     let result = transform_array(&numbers, 2, 1, true);

//     println!("\nHasil:");
//     println!("Original   : {:?}", result.original);
//     println!("Transformed: {:?}", result.transformed);
//     println!("Sum        : {}", result.sum);
//     println!("Average    : {}", result.average);
// }

// Tulis function validateArrayData di sini

// fn main() {
//     let data1 = Vec![
//         Value::Number(1),
//         Value::Number(2),
//         Value::Number(3),
//         Value::Number(4),
//         Value::Number(5)
//     ];

//     let data2 = Vec![
//         Value::Number(1),
//         Value::Str("2".to_string()),
//         Value::Number(3),
//         Value::Null(null),
//         Value::Number(5),
//         Value::Undefined(undefined)
//     ];
//     let result1 = validate_array_data(&data1);
//     let result2 = validate_array_data(&data2);

//     println!("Result 1 : {:#?}", result1);
//     println!("Result 2 : {:#?}", result2)
// }

mod c_array;
use crate::c_array::c9::Value;
use c_array::c9::validate_array_data;
fn main() {
    let data1 = vec![
        Value::Number(1),
        Value::Number(2),
        Value::Number(3),
        Value::Number(4),
        Value::Number(5),
    ];

    let data2 = vec![
        Value::Number(1),
        Value::Str("2".to_string()),
        Value::Number(3),
        Value::Null,
        Value::Number(5),
        Value::Undefined,
    ];

    let result1 = validate_array_data(&data1);
    let result2 = validate_array_data(&data2);

    println!("Result 1: {:#?}", result1);
    println!("Result 2: {:#?}", result2);
}
