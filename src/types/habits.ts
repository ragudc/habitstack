export type HabitFrequency =
  | 'daily'
  | 'weekdays'
  | 'custom'

export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6

export const HABIT_COLORS = [
  { label: 'Indigo',  value: '#6366f1' },
  { label: 'Rose',    value: '#f43f5e' },
  { label: 'Amber',   value: '#f59e0b' },
  { label: 'Emerald', value: '#10b981' },
  { label: 'Sky',     value: '#0ea5e9' },
  { label: 'Purple',  value: '#a855f7' },
  { label: 'Orange',  value: '#f97316' },
  { label: 'Teal',    value: '#14b8a6' },
] as const

export type HabitColor = typeof HABIT_COLORS[number]['value']

export interface Habit {
  id:           string
  user_id:      string
  name:         string
  emoji:        string
  color:        HabitColor | string
  frequency:    HabitFrequency
  custom_days:  WeekDay[]
  reminder_at:  string | null
  sort_order:   number
  created_at:   string
  archived_at:  string | null
}

export interface HabitLog {
  id:           string
  habit_id:     string
  user_id:      string
  logged_date:  string
  created_at:   string
}

export interface HabitStreak {
  habit_id:          string
  current_streak:    number
  longest_streak:    number
  total_completions: number
  completion_rate:   number
  best_month:        string | null
}

export interface HabitWithStatus extends Habit {
  is_completed_today: boolean
  current_streak:     number
}

export interface DailyProgress {
  total:      number
  completed:  number
  percentage: number
}

export interface HeatmapCell {
  date:  string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export interface HabitFormData {
  name:        string
  emoji:       string
  color:       string
  frequency:   HabitFrequency
  custom_days: WeekDay[]
  reminder_at: string | null
}

export const DEFAULT_HABIT_FORM: HabitFormData = {
  name:        '',
  emoji:       '⭐',
  color:       '#6366f1',
  frequency:   'daily',
  custom_days: [],
  reminder_at: null,
}

export const MAX_HABITS = 10

export const WEEKDAY_LABELS: Record<WeekDay, string> = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
}

export const MOTIVATIONAL_MESSAGES = {
  empty:    "Let's get started! 💪",
  low:      "Good progress, keep going! 🔥",
  mid:      "Almost there! 🎯",
  complete: "Perfect day! 🏆",
} as const
