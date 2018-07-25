// hello.cc

#include<node.h>
#include<v8.h>
#include<iostream>

using namespace std;
using namespace v8;

namespace helloWorld {

    void Method(const FunctionCallbackInfo<Value>& args){
        std::cout << "\n\n Hello！";
        printf("\n World 1234");

        Isolate* isolate = args.GetIsolate();
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "\n131达到3"));
    }
    void init(Handle<Object> exports){ 
        NODE_SET_METHOD(exports, "hello", Method);
    }
    NODE_MODULE(NODE_GYP_MODULE_NAME, init);

}  // namespace helloWorld

