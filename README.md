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
C:/> tsc --build --clean
```

## Angular Basics

### Installing angular
 - Angular command-line tool: http:// cli.angular.io
 
 ```
C:/> npm install -g @angular/cli

C:/> ng version

C:/> ng help

```
 
 ### Creating a new angular project
 ```
C:/> ng new my-project-name
 ```

### Run angular app
 - default port: 4200
 - options
    + --open: 자동으로 웹브라우저를 연다
    + -- port 5000: 포트 번호를 5000으로 변경한다 
```
C:/> ng serve
```

#### ※ 혹시 실행이 안될 경우
```
> npm install -g @angular-devkit/build-angular
```

### Generating things
 1. Component
```
C:/> ng generate component sales-person-list
```

 2. class
```
C:\>ng generate class sales-person-list/SalesPerson
```


## ECommerceApp - 1.0
### download spring initializer

 - https://start.spring.io/
 - dependencies
    + Spring Data JPA
    + Rest Repositories
    + Mysql Driver
    + Lombok

![image](https://user-images.githubusercontent.com/22423285/168774339-0367eea3-eef4-46cd-9445-277951ea0828.png)


#### ※ Importing exisiting project on Intellij
 - At the welcome screen press ctrl + shift + A
 - type "project from existing sources" in search box


### Create a project
```
> ng new angular-ecommerce

> ng generate component components/product-list

> ng generate class common/product

> ng generate service services/product
```

### install bootstrap and fontawesome
```
> npm install bootstrap

> npm audit fix

> npm install @fortawesome/fontawesome-free
```

### ※ Spring JPA query methods documentation
https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories.query-methods.details


#### ※ IntelliJ Auto Import Setting

![image](https://user-images.githubusercontent.com/22423285/169420171-f464afb0-99ba-4bda-82c6-422fbd027525.png)

### add components
```
> ng generate class common/product-category

> ng generate component components/product-category-name

```

### events
 - focus
 - blur
 - keyup
 - keydown
 - dblclick

### add components
```
> ng generate component components/search

> ng generate component components/ProductDetails
```

### Pagination
 - installing libraries
```
> ng add @angular/localize

> npm install @ng-bootstrap/ng-bootstrap

```

### angular grammer
```
<ngb-pagination [(page}]="thePageNumber"              <-- two way binding
                [pageSize]="thePageSize               <-- one way binding
                [collectionSize]="theTotalElements"   <-- one way binding
                (pageChange)="listProducts()">        <-- event binding
<ngb-pagination
```
