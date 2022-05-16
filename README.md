# Spring_FullStackAngularAndJavaSpringBootECommerceWebsite

### What to do
 - ecommers web application using angular js and spring boot

-------------------
### Installing typescript

https://github.com/darbyluv2code/fullstack-angular-and-springboot/blob/master/install-angular-tools/ms-windows/install-ms-windows.md


### Compiling typescript file
 - tsc
 - options
    + --EmitOnError: 컴파일 도중 에러가 난다면 js파일을 생성하지 마라
    + --target ES5 : ES5와 그 이상에서 사용이 가능하다
```
C:\> tsc --noEmitOnError filename.ts
C:\> tsc --target ES5 filename.ts

```

### Global compiling options
 - tsconfig.json
 - 프로젝트 옵션 파일
 - 프로젝트의 루트 폴더에 두면 된다
 - "tsc --init" 커맨드를 통하여 기본 tsconfig.json파일을 만들 수 있다

```
{
  "compilerOptions": {
    "noEmitOnError": true,
    "target": "es5"
  }
}

```

#### 타입스크립트 빌드 초기화
 - 생성된 js파일을 지워준다
```
C:> tsc --build --clean
``

## Angular Basics

### Installing angular
 - Angular command-line tool: http:// cli.angular.io
 
 ```
 > npm install -g @angular/cli
 > ng version
 > ng help
 ```
 
 ### Creating a new angular project
 ```
 > ng new my-project-name
 ```

### Run angular app
```
> serve
```
