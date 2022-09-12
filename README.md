# weareop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Needed Json data type/name

//

## Video 

1. 视频封面
   - String(Link)
2. 简介（标题）
   - String
3. up名字
   - String
4. 播放量
   - String  

## login page
- Login
  1. User Name
     - 发送至后端
     - String
  2. Password
     - 发送至后端
     - 加密String
  3. Token
     - 发送至前端
     - Boolean
     - 如果为true就登录成功
- Register
  1. User Name
     - string
  2. Repeted password
     - String （加密）
  3. 暗号
     - 为String 如果错误就直接break