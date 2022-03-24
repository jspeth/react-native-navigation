#import "MyRootViewController.h"
#import "ReactNativeNavigationWindow.h"

@implementation MyRootViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    [self setup];
}

- (void)setup
{
    self.view.backgroundColor = UIColor.whiteColor;

    UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake(self.view.center.x - 70, 370, 140, 50)];
    button.backgroundColor = UIColor.systemBlueColor;
    [button setTitle:@"Present" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(presentReactNative) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
}

- (void)presentReactNative
{
    UIViewController *viewController = [ReactNativeNavigationWindow shared].rootViewController;
    viewController.modalPresentationStyle = UIModalPresentationFullScreen;
    [self presentViewController:viewController animated:YES completion:nil];
}

@end
