//
//  ReactNativeNavigationWindow.m
//
//  Created by Jim Speth on 3/23/22.
//

#import "ReactNativeNavigationWindow.h"

@implementation ReactNativeNavigationWindow

+ (instancetype)shared
{
    static ReactNativeNavigationWindow *instance = nil;
    static dispatch_once_t onceToken = 0;
    dispatch_once(&onceToken, ^{
        if (!instance) {
            instance = [[ReactNativeNavigationWindow alloc] init];
        }
    });
    return instance;
}

- (void)setRootViewController:(UIViewController *)rootViewController
{
    NSLog(@"ReactNativeNavigationWindow: setRootViewController: %@", rootViewController);
    [super setRootViewController:rootViewController];
}

@end
