// mod c_string;
// use c_string::c1::get_string_info;

// fn main() {
//     let hello = get_string_info("Hello");
//     println!(
//         "Hello info: length={}, first={}, last={}",
//         hello.length, hello.first, hello.last
//     );

//     let js = get_string_info("JavaScript");
//     println!(
//         "JS info: length={}, first={}, last={}",
//         js.length, js.first, js.last
//     );

//     let a = get_string_info("A");
//     println!(
//         "A info: length={}, first={}, last={}",
//         a.length, a.first, a.last
//     );
// }

// mod c_string;
// use c_string::c2::analyze_characters;

// fn main() {
//     println!("{:?}", analyze_characters("Hi"));
//     println!("{:?}", analyze_characters("Code"));
// }

// mod c_string;
// use c_string::c3::convert_case;
// fn main() {
//     println!("{}", convert_case("hello world", "upper"));
//     println!("{}", convert_case("HELLO WORLD", "lower"));
//     println!("{}", convert_case("hello world", "title"));
// }

mod c_string;

use c_string::c7::replace_text;

fn main() {
    let r1 = replace_text("Hello world hello", "hello", "hi");
    println!(
        "Result: {}, Replacements: {}, Original: {}",
        r1.result, r1.replacements, r1.original
    );

    let r2 = replace_text("test test test", "test", "exam");
    println!(
        "Result: {}, Replacements: {}, Original: {}",
        r2.result, r2.replacements, r2.original
    );

    let r3 = replace_text("JavaScript", "Python", "Java");
    println!(
        "Result: {}, Replacements: {}, Original: {}",
        r3.result, r3.replacements, r3.original
    );
}
