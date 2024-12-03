# Outline

Application to learn about Google's Protocol Buffers which builds a list of Employees. Tutorial from https://www.youtube.com/watch?v=46O73On0gyI

- See `json_index.js` for which creates JSON representation of Employees to `employees.json`
- See `protobuf_index.js` which uses Protocol Buffers to create a binary representation in `employees.binary`

## Installing Protocol Buffers on Homebrew

```
brew install protobuf@3
brew link --overwrite protobuf@3
```

## Create `employees_pb.js`

Run the compilation step:

```
protoc --js_out=import_style=commonjs,binary:. employees.proto
```

Using the `employees.proto` file it creates `employees_pb.js` which contains `Employee` and `Employees` objects that are used in `protobuf_index.js`

## Running the code

```
npm run protobuf
```

This serializes using Protocol Buffers the `Employee` and `Employees` objects into `employees.binary`