//
//  ReactNativeNavigationWindow.m
//
//  Created by Jim Speth on 3/23/22.
//

#import "ReactNativeNavigationWindow.h"

@interface ReactNativeNavigationWindow ()
@property (nonatomic, strong) UIWindow *lastWindow;
@end

@implementation ReactNativeNavigationWindow

static NSTimeInterval animationDuration = 0.3;

+ (instancetype)shared
{
    static ReactNativeNavigationWindow *instance = nil;
    static dispatch_once_t onceToken = 0;
    dispatch_once(&onceToken, ^{
        if (!instance) {
            instance = [[ReactNativeNavigationWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
        }
    });
    return instance;
}

- (void)setRootViewController:(UIViewController *)rootViewController
{
    NSLog(@"ReactNativeNavigationWindow: setRootViewController: %@", rootViewController);
    [super setRootViewController:rootViewController];
}

- (void)presentAnimated:(BOOL)animated
{
    self.lastWindow = [UIApplication sharedApplication].keyWindow;

    self.alpha = 0.0;
    [self makeKeyAndVisible];
    [UIApplication sharedApplication].delegate.window = self;

    [UIView animateWithDuration:animated ? animationDuration : 0.0 animations:^{
        self.alpha = 1.0;
    } completion:nil];
}

- (void)dismissAnimated:(BOOL)animated
{
    [UIView animateWithDuration:animated ? animationDuration : 0.0 animations:^{
        self.alpha = 0.0;
    } completion:^(BOOL finished) {
        [self.lastWindow makeKeyAndVisible];
        [UIApplication sharedApplication].delegate.window = self.lastWindow;
        self.lastWindow = nil;
    }];
}

@end
