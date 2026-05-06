pub fn get_current_time() -> String {
    use chrono::Local;
    use chrono::Timelike;

    let now = Local::now();

    let hours = format!("{:02}", now.hour());
    let minutes = format!("{:02}", now.minute());
    let seconds = format!("{:02}", now.second());

    format!("{}:{}:{}", hours, minutes, seconds)
}
