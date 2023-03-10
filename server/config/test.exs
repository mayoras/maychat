import Config

config :maychat, ecto_repos: [Maychat.Repo]

config :maychat, Maychat.Repo,
  host: "localhost",
  database: "maychat_test",
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  port: "5432",
  pool: Ecto.Adapters.SQL.Sandbox

config :plug, :validate_header_keys_during_test, false
