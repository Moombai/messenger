# Messenger Application

Hey, welcome to the Messenger App.

## Installation

To get started, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/Moombai/messenger.git
```

2. **Navigate to the project directory**:

```bash
cd messenger
```

3. **Install dependencies**:

```bash
nvm use
npm install
```

4. **Start the application**:

```bash
npm run start:docker
```

## Usage

1. Open your browser and navigate to `http://localhost:8080`.
2. Save message:

```bash
curl -X POST http://localhost:8080/save \
-H "Content-Type: application/json" \
-d '{"message": "Save message example"}'
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
